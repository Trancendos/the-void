import { describe, it, expect } from 'vitest';
import VoidService from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should allow valid target', async () => {
      await expect(service.isolate('valid-target_123')).resolves.not.toThrow();
    });

    it('should reject target with spaces', async () => {
      await expect(service.isolate('invalid target')).rejects.toThrow('Invalid target: contains unsafe characters');
    });

    it('should reject target with special characters', async () => {
      await expect(service.isolate('target!')).rejects.toThrow('Invalid target: contains unsafe characters');
    });

    it('should reject empty target', async () => {
      await expect(service.isolate('')).rejects.toThrow('Invalid target: must be a non-empty string');
    });
  });

  describe('quarantine', () => {
    it('should allow valid agentId', async () => {
      await expect(service.quarantine('agent-007')).resolves.not.toThrow();
    });

    it('should reject agentId with injection attempt', async () => {
      await expect(service.quarantine('agent; DROP TABLE users')).rejects.toThrow('Invalid agentId: contains unsafe characters');
    });
  });
});
