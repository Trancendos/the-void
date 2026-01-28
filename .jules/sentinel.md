## 2025-10-26 - Log Injection Risk
**Vulnerability:** Missing input validation in `VoidService` allowed arbitrary strings, including control characters.
**Learning:** Even internal service methods logging inputs can be vectors for Log Injection if inputs aren't sanitized.
**Prevention:** Implement strict allow-list validation (e.g. alphanumeric only) at service boundaries.
