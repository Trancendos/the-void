# Sentinel Journal


## 2024-05-22 - Missing Input Validation
**Vulnerability:** Core service methods accepted arbitrary input strings without validation.
**Learning:** Even simple logging services can be vectors for attacks if input is unchecked.
**Prevention:** Enforced strict alphanumeric and length validation on all inputs.
