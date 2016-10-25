class JSONSchemaValidator implements SchemaValidator {
  validate(unvalidated: any, schema: any) : SchemaValidationResult {
    if(unvalidated instanceof String) {
      return this.validateString(unvalidated, schema);
    }

    return SchemaValidationResult.invalidResultWithMessage("No implemented yet!");
  }

  validateString(unvalidated: String, schema: any) : SchemaValidationResult {
    return SchemaValidationResult.validResultWithMessage("No implemented yet!");
  }
}
