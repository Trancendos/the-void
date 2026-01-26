import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid target', async () => {
      await expect(service.isolate('valid-target_123')).resolves.not.toThrow();
    });

    it('should reject empty target', async () => {
      await expect(service.isolate('')).rejects.toThrow();
    });

    it('should reject target with invalid characters', async () => {
      await expect(service.isolate('invalid target!')).rejects.toThrow();
      await expect(service.isolate('target$')).rejects.toThrow();
      await expect(service.isolate('target/path')).rejects.toThrow();
    });
  });

  describe('quarantine', () => {
    it('should accept valid agentId', async () => {
      await expect(service.quarantine('agent_007')).resolves.not.toThrow();
    });

    it('should reject empty agentId', async () => {
      await expect(service.quarantine('')).rejects.toThrow();
    });

    it('should reject agentId with invalid characters', async () => {
      await expect(service.quarantine('agent@007')).rejects.toThrow();
    });
  });
});
