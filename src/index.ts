export class VoidService {
  private _validateInput(input: string, fieldName: string): void {
    if (!input || typeof input !== 'string') {
      throw new Error(`Invalid ${fieldName}: must be a non-empty string`);
    }
    // Allow alphanumeric, hyphens, and underscores.
    // This prevents potential injection attacks (e.g. log injection, XSS if reflected)
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
      throw new Error(`Invalid ${fieldName}: contains unsafe characters`);
    }
  }

  async isolate(target: string): Promise<void> {
    this._validateInput(target, 'target');
    console.log(`[The Void] Isolating: ${target}`);
  }

  async quarantine(agentId: string): Promise<void> {
    this._validateInput(agentId, 'agentId');
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}
export default VoidService;
