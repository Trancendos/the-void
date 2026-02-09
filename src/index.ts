export class VoidService {
  private validateInput(input: string): void {
    if (!input || typeof input !== 'string') {
      throw new Error('Input must be a non-empty string');
    }
    if (input.length > 64) {
      throw new Error('Input exceeds maximum length of 64 characters');
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
      throw new Error('Input contains invalid characters');
    }
  }

  async isolate(target: string): Promise<void> {
    this.validateInput(target);
    console.log(`[The Void] Isolating: ${target}`);
  }

  async quarantine(agentId: string): Promise<void> {
    this.validateInput(agentId);
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}

export default VoidService;
