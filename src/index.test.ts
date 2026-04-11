import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid alphanumeric input', async () => {
      await expect(service.isolate('validTarget123')).resolves.not.toThrow();
    });

    it('should reject empty input', async () => {
      await expect(service.isolate('')).rejects.toThrow();
    });

    it('should reject input with special characters', async () => {
      await expect(service.isolate('invalid!target')).rejects.toThrow();
    });

    it('should reject input strictly longer than 64 chars', async () => {
      const longInput = 'a'.repeat(65);
      await expect(service.isolate(longInput)).rejects.toThrow();
    });
  });

  describe('quarantine', () => {
    it('should accept valid input with hyphens and underscores', async () => {
      await expect(service.quarantine('valid-agent_id')).resolves.not.toThrow();
    });

    it('should reject empty input', async () => {
      await expect(service.quarantine('')).rejects.toThrow();
    });

    it('should reject input with spaces', async () => {
      await expect(service.quarantine('agent id')).rejects.toThrow();
    });
  });
});
