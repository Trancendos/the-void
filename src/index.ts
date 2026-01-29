export class VoidService {
  private _validateInput(input: string): void {
    if (!input || typeof input !== 'string') {
      throw new Error('Input must be a non-empty string');
    }
    if (input.length > 64) {
      throw new Error('Input length exceeds 64 characters');
    }
    const validPattern = /^[a-zA-Z0-9_-]+$/;
    if (!validPattern.test(input)) {
      throw new Error('Input contains invalid characters');
    }
  }

  async isolate(target: string): Promise<void> {
    this._validateInput(target);
    console.log(`[The Void] Isolating: ${target}`);
  }
  async quarantine(agentId: string): Promise<void> {
    this._validateInput(agentId);
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}
export default VoidService;
