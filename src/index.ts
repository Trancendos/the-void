export class VoidService {
  async isolate(target: string): Promise<void> {
    this._validateInput(target);
    console.log(`[The Void] Isolating: ${target}`);
  }

  async quarantine(agentId: string): Promise<void> {
    this._validateInput(agentId);
    console.log(`[The Void] Quarantining: ${agentId}`);
  }

  private _validateInput(input: string): void {
    if (typeof input !== 'string') {
      throw new Error('Invalid input: Input must be a string.');
    }
    if (input.length === 0) {
      throw new Error('Invalid input: Input cannot be empty.');
    }
    if (input.length > 64) {
      throw new Error('Invalid input: Input exceeds maximum length of 64 characters.');
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
      throw new Error('Invalid input: Input contains invalid characters. Only alphanumeric, hyphens, and underscores are allowed.');
    }
  }
}
export default VoidService;
