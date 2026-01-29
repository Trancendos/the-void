import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid inputs', async () => {
      await expect(service.isolate('valid-input_123')).resolves.not.toThrow();
      await expect(service.isolate('agent-007')).resolves.not.toThrow();
    });

    it('should reject inputs with invalid characters', async () => {
      await expect(service.isolate('invalid$input')).rejects.toThrow();
      await expect(service.isolate('space in input')).rejects.toThrow();
      await expect(service.isolate('email@example.com')).rejects.toThrow();
    });

    it('should reject empty inputs', async () => {
      await expect(service.isolate('')).rejects.toThrow();
    });

    it('should reject inputs longer than 64 characters', async () => {
      const longInput = 'a'.repeat(65);
      await expect(service.isolate(longInput)).rejects.toThrow();
    });
  });

  describe('quarantine', () => {
    it('should accept valid inputs', async () => {
      await expect(service.quarantine('valid-input_123')).resolves.not.toThrow();
    });

    it('should reject inputs with invalid characters', async () => {
      await expect(service.quarantine('invalid!input')).rejects.toThrow();
    });
  });
});
