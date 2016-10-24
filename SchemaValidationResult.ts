class SchemaValidationResult {
  isValid: Boolean;
  message: String;

  static validResultWithMessage(message: String) : SchemaValidationResult {
    let validationResult: SchemaValidationResult = new SchemaValidationResult();
    validationResult.isValid = true;
    validationResult.message = message;
    return validationResult;
  }

  static invalidResultWithMessage(message: String) : SchemaValidationResult {
    let validationResult: SchemaValidationResult = new SchemaValidationResult();
    validationResult.isValid = false;
    validationResult.message = message;
    return validationResult;
  }
}
