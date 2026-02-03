import { describe, it, expect } from 'vitest';
import VoidService from './index';

describe('VoidService', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid alphanumeric input with hyphens and underscores', async () => {
      await expect(service.isolate('valid-target_123')).resolves.toBeUndefined();
    });

    it('should throw error for empty string', async () => {
      await expect(service.isolate('')).rejects.toThrow('Input cannot be empty');
    });

    it('should throw error for input exceeding 64 chars', async () => {
      const longString = 'a'.repeat(65);
      await expect(service.isolate(longString)).rejects.toThrow('exceeds maximum length');
    });

    it('should throw error for invalid characters (spaces)', async () => {
      await expect(service.isolate('invalid input')).rejects.toThrow('contains invalid characters');
    });

    it('should throw error for invalid characters (special chars)', async () => {
      await expect(service.isolate('input!')).rejects.toThrow('contains invalid characters');
      await expect(service.isolate('<script>')).rejects.toThrow('contains invalid characters');
    });
  });

  describe('quarantine', () => {
     it('should accept valid agent ID', async () => {
      await expect(service.quarantine('agent-007')).resolves.toBeUndefined();
    });

    it('should reject invalid agent ID', async () => {
      await expect(service.quarantine('agent@bad')).rejects.toThrow('contains invalid characters');
    });
  });
});
