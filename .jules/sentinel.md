## 2026-01-29 - Missing Input Validation in VoidService
**Vulnerability:** Input validation for `VoidService.isolate` and `quarantine` methods was missing, despite strict requirements (max 64 chars, alphanumeric/hyphens/underscores).
**Learning:** Security requirements must be enforced in code, not just documentation or memory. The absence of tests allowed this gap to persist.
**Prevention:** Implement strict input validation using regex and enforce it with comprehensive unit tests covering edge cases.
