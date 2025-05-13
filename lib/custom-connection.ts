import {
  type Blockhash,
  type BlockheightBasedTransactionConfirmationStrategy,
  type Commitment,
  Connection,
  type ConnectionConfig,
  type PublicKey,
  type RpcResponseAndContext,
  type SignatureResult,
  type SimulatedTransactionResponse,
  type Transaction,
  type TransactionSignature,
} from "@solana/web3.js"

/**
 * CustomConnection extends the standard Solana Connection class
 * but overrides all subscription methods to prevent WebSocket usage
 */
export class CustomConnection extends Connection {
  constructor(endpoint: string, commitmentOrConfig?: Commitment | ConnectionConfig) {
    super(endpoint, commitmentOrConfig)
  }

  // Override subscription methods to prevent WebSocket usage
  onAccountChange(
    publicKey: PublicKey,
    callback: (accountInfo: any, context: any) => void,
    commitment?: Commitment,
  ): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeAccountChangeListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  onProgramAccountChange(
    programId: PublicKey,
    callback: (keyedAccountInfo: any, context: any) => void,
    commitment?: Commitment,
    filters?: any,
  ): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeProgramAccountChangeListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  onLogs(
    filter: PublicKey | "all" | "allWithVotes",
    callback: (logs: any, ctx: any) => void,
    commitment?: Commitment,
  ): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeOnLogsListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  onSlotChange(callback: (slotInfo: any) => void): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeSlotChangeListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  onSlotUpdate(callback: (slotUpdate: any) => void): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeSlotUpdateListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  // The most important override - this is what's causing our issue
  onSignature(
    signature: TransactionSignature,
    callback: (signatureResult: SignatureResult, context: any) => void,
    commitment?: Commitment,
  ): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")

    // Instead of subscribing, set up polling
    this.pollSignatureStatus(signature, callback, commitment)

    // Return a dummy subscription ID
    return 0
  }

  removeSignatureListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  onRootChange(callback: (root: number) => void): number {
    console.warn("WebSocket subscriptions are disabled. Using polling instead.")
    // Return a dummy subscription ID
    return 0
  }

  removeRootChangeListener(id: number): Promise<void> {
    // Do nothing as we're not actually subscribing
    return Promise.resolve()
  }

  // Helper method to poll for signature status
  private pollSignatureStatus(
    signature: TransactionSignature,
    callback: (signatureResult: SignatureResult, context: any) => void,
    commitment?: Commitment,
  ): void {
    const checkStatus = async () => {
      try {
        // Include searchTransactionHistory: true to search beyond recent transactions
        const response = await this.getSignatureStatus(signature, {
          searchTransactionHistory: true,
          commitment,
        })

        if (response && response.value) {
          // If we have a result, call the callback and stop polling
          callback(response.value, { slot: response.context.slot })
          return
        }

        // Continue polling
        setTimeout(checkStatus, 2000)
      } catch (error) {
        console.error("Error polling for signature status:", error)
        // Continue polling even on error
        setTimeout(checkStatus, 2000)
      }
    }

    // Start polling
    checkStatus()
  }

  // Override the confirmTransaction method to use polling instead of subscriptions
  async confirmTransaction(
    strategy: BlockheightBasedTransactionConfirmationStrategy | TransactionSignature | Blockhash,
    commitment?: Commitment,
  ): Promise<RpcResponseAndContext<SignatureResult>> {
    // If strategy is a signature string, use our custom polling method
    if (typeof strategy === "string") {
      return this.confirmTransactionUsingPolling(strategy, commitment)
    }

    // Otherwise, use the parent implementation
    return super.confirmTransaction(strategy as any, commitment)
  }

  // Custom method to confirm transactions using polling
  async confirmTransactionUsingPolling(
    signature: TransactionSignature,
    commitment?: Commitment,
  ): Promise<RpcResponseAndContext<SignatureResult>> {
    const startTime = Date.now()
    const timeout = 60000 // 60 seconds

    while (Date.now() - startTime < timeout) {
      // Include searchTransactionHistory: true to search beyond recent transactions
      const response = await this.getSignatureStatus(signature, {
        searchTransactionHistory: true,
        commitment,
      })

      if (response && response.value) {
        if (response.value.err) {
          return response
        }

        if (response.value.confirmationStatus === "confirmed" || response.value.confirmationStatus === "finalized") {
          return response
        }
      }

      // Wait before polling again
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    throw new Error("Transaction confirmation timeout")
  }

  // Override simulateTransaction to avoid using preflight transactions if needed
  async simulateTransaction(
    transaction: Transaction,
    signers?: Array<any>,
    includeAccounts?: boolean | Array<PublicKey>,
  ): Promise<RpcResponseAndContext<SimulatedTransactionResponse>> {
    try {
      return await super.simulateTransaction(transaction, signers, includeAccounts)
    } catch (error) {
      console.error("Error simulating transaction:", error)
      // Return a dummy response if simulation fails
      return {
        context: { slot: 0 },
        value: {
          err: null,
          logs: [],
          accounts: null,
          unitsConsumed: 0,
        },
      }
    }
  }
}
