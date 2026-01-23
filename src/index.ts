export class VoidService {
  async isolate(target: string): Promise<void> {
    console.log(`[The Void] Isolating: ${target}`);
  }
  async quarantine(agentId: string): Promise<void> {
    console.log(`[The Void] Quarantining: ${agentId}`);
  }
}
export default VoidService;
