interface SchemaValidator {
  validate(unvalidated: any, schema: any) : SchemaValidationResult;
}
