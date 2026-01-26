## 2024-10-24 - Missing Input Validation
**Vulnerability:** Input validation for `VoidService` methods was completely missing despite documentation/memory stating it was enforced.
**Learning:** Documentation and memory can drift from implementation. Always verify security claims with code inspection and tests.
**Prevention:** Implement automated tests that specifically target security constraints (like input validation) to ensure they are active.
