import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  let service: VoidService;

  beforeEach(() => {
    service = new VoidService();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  describe('isolate', () => {
    it('should accept valid alphanumeric input', async () => {
      await expect(service.isolate('validTarget123')).resolves.not.toThrow();
    });

    it('should accept input with hyphens and underscores', async () => {
      await expect(service.isolate('target-with_underscores')).resolves.not.toThrow();
    });

    it('should reject empty input', async () => {
      await expect(service.isolate('')).rejects.toThrow('Input must be a non-empty string');
    });

    it('should reject input with spaces', async () => {
      await expect(service.isolate('invalid target')).rejects.toThrow('Input contains invalid characters');
    });

    it('should reject input with special characters', async () => {
      await expect(service.isolate('target!')).rejects.toThrow('Input contains invalid characters');
    });

    it('should reject input longer than 64 characters', async () => {
      const longInput = 'a'.repeat(65);
      await expect(service.isolate(longInput)).rejects.toThrow('Input exceeds maximum length of 64 characters');
    });
  });

  describe('quarantine', () => {
    it('should accept valid input', async () => {
      await expect(service.quarantine('agent-007')).resolves.not.toThrow();
    });

    it('should reject invalid input', async () => {
      await expect(service.quarantine('agent@007')).rejects.toThrow('Input contains invalid characters');
    });
  });
});
