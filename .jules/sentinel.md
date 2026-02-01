## 2025-02-18 - Unvalidated Service Inputs
**Vulnerability:** VoidService methods accepted arbitrary strings without validation.
**Learning:** Even simple service methods intended for isolation can be entry points for injection if inputs are unchecked.
**Prevention:** Enforce strict allow-list validation on all service boundaries.
