

describe("SchemaValidator String Tests", () => {
    var validator: SchemaValidator;

    beforeEach(() => {
        validator = new JSONSchemaValidator();
    });

    it("validates strings correctly", () => {
        let result = validator.validate("This is a string.", "{\"type\": \"string\"}");
        expect(result.isValid).toBe(true);
        expect(true).toEqual(true);
    });
});
