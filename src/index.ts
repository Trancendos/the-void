export class VoidService {
  private validateInput(input: string, fieldName: string): void {
    if (!input || input.trim().length === 0) {
      throw new Error(`${fieldName} must be a non-empty string`);
    }
    if (input.length > 64) {
      throw new Error(`${fieldName} exceeds maximum length of 64 characters`);
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
      throw new Error(`${fieldName} contains invalid characters (allowed: alphanumeric, hyphen, underscore)`);
    }
  }

  async isolate(target: string): Promise<void> {
    this.validateInput(target, 'target');
    console.log(`[The Void] Isolating: ${target}`);
  }

  async quarantine(agentId: string): Promise<void> {
    this.validateInput(agentId, 'agentId');
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}
export default VoidService;
