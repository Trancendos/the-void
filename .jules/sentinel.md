## 2026-01-31 - Input Validation Standard for Void Identifiers
**Vulnerability:** Unrestricted input allows for potential Log Injection and DoS via long strings.
**Learning:** The VoidService handles sensitive operations (isolate/quarantine) based on string identifiers. These identifiers must be strictly validated to prevent downstream injection attacks or resource exhaustion.
**Prevention:** Enforce strict allowlist validation (Alphanumeric, `-`, `_`) and length limits (max 64) for all entity identifiers in the system.
