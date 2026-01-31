import { describe, test, expect } from 'vitest';
import { VoidService } from './index';

describe('VoidService', () => {
  const service = new VoidService();

  test('isolate should accept valid input', async () => {
    await expect(service.isolate('target-1')).resolves.not.toThrow();
  });

  test('quarantine should accept valid input', async () => {
    await expect(service.quarantine('agent_007')).resolves.not.toThrow();
  });

  test('isolate should reject empty string', async () => {
    await expect(service.isolate('')).rejects.toThrow('Input cannot be empty');
  });

  test('isolate should reject special characters (XSS/Log Injection)', async () => {
    await expect(service.isolate('<script>alert(1)</script>')).rejects.toThrow('Input contains invalid characters');
  });

  test('quarantine should reject long strings (>64 chars)', async () => {
    const longString = 'a'.repeat(65);
    await expect(service.quarantine(longString)).rejects.toThrow('Input exceeds maximum length');
  });

  test('isolate should reject spaces', async () => {
    await expect(service.isolate('target 1')).rejects.toThrow('Input contains invalid characters');
  });

  test('isolate should reject SQL injection attempts', async () => {
     await expect(service.isolate("' OR '1'='1")).rejects.toThrow('Input contains invalid characters');
  });
});
