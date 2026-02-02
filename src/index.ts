export class VoidService {
  private validateInput(input: string): void {
    if (!input || input.length === 0) {
      throw new Error("Invalid input: Input cannot be empty");
    }
    if (input.length > 64) {
      throw new Error("Invalid input: Input too long");
    }
    // Allow alphanumeric, hyphen, underscore
    const validRegex = /^[a-zA-Z0-9_-]+$/;
    if (!validRegex.test(input)) {
      throw new Error("Invalid input: Contains disallowed characters");
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
