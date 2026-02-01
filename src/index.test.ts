import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('valid inputs', () => {
    it('should allow valid input for isolate', async () => {
      await expect(service.isolate('valid-input_123')).resolves.not.toThrow();
    });

    it('should allow valid input for quarantine', async () => {
      await expect(service.quarantine('valid-agent_007')).resolves.not.toThrow();
    });
  });

  describe('security validation', () => {
    it('should reject inputs with special characters', async () => {
      await expect(service.isolate('bad;input')).rejects.toThrow('Input contains invalid characters');
      await expect(service.quarantine('<script>')).rejects.toThrow('Input contains invalid characters');
    });

    it('should reject empty strings', async () => {
      await expect(service.isolate('')).rejects.toThrow('Input must be between 1 and 64 characters');
    });

    it('should reject inputs longer than 64 characters', async () => {
      const longInput = 'a'.repeat(65);
      await expect(service.isolate(longInput)).rejects.toThrow('Input must be between 1 and 64 characters');
    });
  });
});
