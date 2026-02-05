import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid alphanumeric target', async () => {
      await expect(service.isolate('validTarget123')).resolves.not.toThrow();
    });

    it('should accept valid target with hyphens and underscores', async () => {
      await expect(service.isolate('valid-target_123')).resolves.not.toThrow();
    });

    it('should reject empty target', async () => {
      await expect(service.isolate('')).rejects.toThrow();
    });

    it('should reject target exceeding 64 characters', async () => {
      const longTarget = 'a'.repeat(65);
      await expect(service.isolate(longTarget)).rejects.toThrow();
    });

    it('should reject target with special characters', async () => {
      await expect(service.isolate('invalid$target')).rejects.toThrow();
      await expect(service.isolate('target; drop table')).rejects.toThrow();
    });
  });

  describe('quarantine', () => {
    it('should accept valid agentId', async () => {
      await expect(service.quarantine('agent-007')).resolves.not.toThrow();
    });

    it('should reject empty agentId', async () => {
      await expect(service.quarantine('')).rejects.toThrow();
    });

    it('should reject agentId with special characters', async () => {
      await expect(service.quarantine('agent/../hack')).rejects.toThrow();
    });
  });
});
