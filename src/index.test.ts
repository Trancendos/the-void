import { describe, it, expect, vi } from 'vitest';
import { VoidService } from './index';

describe('VoidService Security', () => {
  const service = new VoidService();

  it('should accept valid alphanumeric inputs', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    await service.isolate('valid-target_123');
    expect(consoleSpy).toHaveBeenCalledWith('[The Void] Isolating: valid-target_123');

    await service.quarantine('agent-007');
    expect(consoleSpy).toHaveBeenCalledWith('[The Void] Quarantining: agent-007');
    consoleSpy.mockRestore();
  });

  it('should reject inputs with spaces', async () => {
    await expect(service.isolate('bad target')).rejects.toThrow();
    await expect(service.quarantine('bad agent')).rejects.toThrow();
  });

  it('should reject inputs with special characters', async () => {
    await expect(service.isolate('target$')).rejects.toThrow();
    await expect(service.quarantine('agent@')).rejects.toThrow();
  });

  it('should reject empty inputs', async () => {
    await expect(service.isolate('')).rejects.toThrow();
    await expect(service.quarantine('')).rejects.toThrow();
  });

  it('should reject potential log injection attacks', async () => {
    await expect(service.isolate('target\n[The Void] Fake Log')).rejects.toThrow();
  });
});
