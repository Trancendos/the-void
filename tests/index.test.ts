import { describe, it, expect, vi } from 'vitest';
import { VoidService } from '../src/index';

describe('VoidService', () => {
  const service = new VoidService();

  it('should isolate valid target', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    await service.isolate('valid-target_123');
    expect(consoleSpy).toHaveBeenCalledWith('[The Void] Isolating: valid-target_123');
    consoleSpy.mockRestore();
  });

  it('should quarantine valid agentId', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    await service.quarantine('agent-007');
    expect(consoleSpy).toHaveBeenCalledWith('[The Void] Quarantining: agent-007');
    consoleSpy.mockRestore();
  });

  it('should throw error for empty target', async () => {
    await expect(service.isolate('')).rejects.toThrow('Invalid target');
    await expect(service.isolate('   ')).rejects.toThrow('Invalid target');
  });

  it('should throw error for unsafe target characters', async () => {
    await expect(service.isolate('unsafe<script>')).rejects.toThrow('Invalid target');
    await expect(service.isolate('drop table')).rejects.toThrow('Invalid target');
    await expect(service.isolate('hello\nworld')).rejects.toThrow('Invalid target');
  });

  it('should throw error for invalid agentId', async () => {
     await expect(service.quarantine('')).rejects.toThrow('Invalid agentId');
     await expect(service.quarantine('bad/char')).rejects.toThrow('Invalid agentId');
  });
});
