import { describe, it, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService Security', () => {
  const service = new VoidService();

  describe('isolate', () => {
    it('should accept valid alphanumeric target', async () => {
      await expect(service.isolate('user-123')).resolves.not.toThrow();
    });

    it('should reject target with newlines (log injection)', async () => {
      await expect(service.isolate('user\nadmin')).rejects.toThrow();
    });

    it('should reject target with special characters', async () => {
      await expect(service.isolate('user$123')).rejects.toThrow();
    });

    it('should reject empty target', async () => {
      await expect(service.isolate('')).rejects.toThrow();
    });

    it('should reject target exceeding max length', async () => {
      const longTarget = 'a'.repeat(65);
      await expect(service.isolate(longTarget)).rejects.toThrow();
    });
  });

  describe('quarantine', () => {
    it('should accept valid agentId', async () => {
      await expect(service.quarantine('agent_007')).resolves.not.toThrow();
    });

    it('should reject invalid agentId', async () => {
      await expect(service.quarantine('agent<script>')).rejects.toThrow();
    });
  });
});
