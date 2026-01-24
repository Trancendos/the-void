export class VoidService {
  async isolate(target: string): Promise<void> {
    if (!target || typeof target !== 'string' || target.trim().length === 0) {
      throw new Error('Invalid target: must be a non-empty string');
    }
    // Allow alphanumeric, hyphens, underscores
    if (!/^[a-zA-Z0-9_-]+$/.test(target)) {
      throw new Error('Invalid target: contains unsafe characters');
    }
    console.log(`[The Void] Isolating: ${target}`);
  }
  async quarantine(agentId: string): Promise<void> {
    if (!agentId || typeof agentId !== 'string' || agentId.trim().length === 0) {
       throw new Error('Invalid agentId: must be a non-empty string');
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(agentId)) {
       throw new Error('Invalid agentId: contains unsafe characters');
    }
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}
export default VoidService;
