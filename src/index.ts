export class VoidService {
  private validateInput(input: string, context: string): void {
    if (!input || typeof input !== 'string') {
      throw new Error(`Invalid input for ${context}: Input cannot be empty`);
    }

    if (input.length > 64) {
      throw new Error(`Invalid input for ${context}: Input exceeds maximum length`);
    }

    // Allow alphanumeric, hyphen, and underscore
    if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
      throw new Error(`Invalid input for ${context}: Input contains invalid characters`);
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
