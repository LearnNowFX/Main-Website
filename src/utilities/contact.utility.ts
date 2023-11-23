type FormValidatorOptions<T> = {
  requiredFields: (keyof T)[];
  validators: Record<keyof T, (value: T[keyof T]) => string>;
};

type ValidateionResult<T extends object> = {
  isValid: boolean;
  errors: Record<keyof T, string>;
};

export class ContactFormValidator<T extends object>  {
  private options: FormValidatorOptions<T>;

  constructor(options: FormValidatorOptions<T>) {
    this.options = options;
  }

  public validate(form: T): ValidateionResult<T> {
    const errors: Record<keyof T, string> = {} as Record<keyof T, string>;

    Object.keys(form).forEach(field => {
      const validator = this.options.validators[field as keyof T];

      if (validator) {
        errors[field as keyof T] = validator(form[field as keyof T]);
      }
    });

    const 

return  {
    errors,
    isValid: this.options.requiredFields.every(field => !!form[field]) && !Object.values(errors).some(error => !!error),
  }
}
