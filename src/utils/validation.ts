// ============================================================
// VALIDATION HELPERS
// ============================================================

import { VALIDATION_PATTERNS, VALIDATION_MESSAGES } from '@/config/constants';

export interface ValidationResult {
    isValid: boolean;
    message: string | null;
}

/**
 * Validate required field
 */
export const validateRequired = (value: unknown): ValidationResult => {
    const isValid =
        value !== null &&
        value !== undefined &&
        (typeof value !== 'string' || value.trim() !== '');

    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.REQUIRED,
    };
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
    const isValid = VALIDATION_PATTERNS.EMAIL.test(email);
    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.EMAIL,
    };
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): ValidationResult => {
    const isValid = VALIDATION_PATTERNS.PASSWORD.test(password);
    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.PASSWORD,
    };
};

/**
 * Validate minimum length
 */
export const validateMinLength = (
    value: string,
    minLength: number
): ValidationResult => {
    const isValid = value.length >= minLength;
    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.MIN_LENGTH(minLength),
    };
};

/**
 * Validate maximum length
 */
export const validateMaxLength = (
    value: string,
    maxLength: number
): ValidationResult => {
    const isValid = value.length <= maxLength;
    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.MAX_LENGTH(maxLength),
    };
};

/**
 * Validate passwords match
 */
export const validatePasswordsMatch = (
    password: string,
    confirmPassword: string
): ValidationResult => {
    const isValid = password === confirmPassword;
    return {
        isValid,
        message: isValid ? null : VALIDATION_MESSAGES.PASSWORDS_MATCH,
    };
};

/**
 * Validate URL format
 */
export const validateUrl = (url: string): ValidationResult => {
    const isValid = VALIDATION_PATTERNS.URL.test(url);
    return {
        isValid,
        message: isValid ? null : 'Please enter a valid URL',
    };
};

/**
 * Validate phone number format
 */
export const validatePhone = (phone: string): ValidationResult => {
    const isValid = VALIDATION_PATTERNS.PHONE.test(phone);
    return {
        isValid,
        message: isValid ? null : 'Please enter a valid phone number',
    };
};

/**
 * Compose multiple validators
 */
export const composeValidators = (
    value: unknown,
    validators: ((value: unknown) => ValidationResult)[]
): ValidationResult => {
    for (const validator of validators) {
        const result = validator(value);
        if (!result.isValid) {
            return result;
        }
    }
    return { isValid: true, message: null };
};

/**
 * Validate an entire form
 */
export const validateForm = <T extends Record<string, unknown>>(
    values: T,
    validationRules: Partial<Record<keyof T, ((value: unknown) => ValidationResult)[]>>
): Record<keyof T, string | null> => {
    const errors = {} as Record<keyof T, string | null>;

    for (const [field, validators] of Object.entries(validationRules)) {
        const value = values[field as keyof T];
        const validatorsArray = validators as ((value: unknown) => ValidationResult)[];
        const result = composeValidators(value, validatorsArray);
        errors[field as keyof T] = result.message;
    }

    return errors;
};

/**
 * Check if form has any errors
 */
export const hasFormErrors = (errors: Record<string, string | null>): boolean => {
    return Object.values(errors).some((error) => error !== null);
};
