import { describe, it, expect, vi } from 'vitest';
import VoidService from './index';

describe('VoidService Security', () => {
  it('should allow valid alphanumeric input', async () => {
    const service = new VoidService();
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    await expect(service.isolate('valid-target_123')).resolves.not.toThrow();
    await expect(service.quarantine('agent-007')).resolves.not.toThrow();

    consoleSpy.mockRestore();
  });

  it('should reject inputs with special characters', async () => {
    const service = new VoidService();
    // Currently these will fail (i.e. they will NOT throw)
    await expect(service.isolate('target; rm -rf /')).rejects.toThrow(/Invalid input/);
    await expect(service.quarantine('<script>alert(1)</script>')).rejects.toThrow(/Invalid input/);
  });

  it('should reject empty inputs', async () => {
    const service = new VoidService();
    await expect(service.isolate('')).rejects.toThrow(/Invalid input/);
  });

  it('should reject overly long inputs', async () => {
    const service = new VoidService();
    const longString = 'a'.repeat(65);
    await expect(service.isolate(longString)).rejects.toThrow(/Invalid input/);
  });
});
