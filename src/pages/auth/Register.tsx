// ============================================================
// REGISTER PAGE
// ============================================================

import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";
import { ROUTES } from "@/config/constants";
import {
  validateEmail,
  validatePassword,
  validateRequired,
  validatePasswordsMatch,
  validateMinLength,
} from "@/utils/validation";

export default function RegisterPage() {
  useDocumentTitle("Sign Up");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = (): boolean => {
    const firstNameValidation = validateRequired(formData.firstName);
    const lastNameValidation = validateRequired(formData.lastName);
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);
    const minLengthValidation = validateMinLength(formData.password, 8);
    const confirmPasswordValidation = validatePasswordsMatch(
      formData.password,
      formData.confirmPassword,
    );

    setErrors({
      firstName: firstNameValidation.message ?? "",
      lastName: lastNameValidation.message ?? "",
      email: emailValidation.message ?? "",
      password: passwordValidation.message ?? minLengthValidation.message ?? "",
      confirmPassword: confirmPasswordValidation.message ?? "",
    });

    return (
      firstNameValidation.isValid &&
      lastNameValidation.isValid &&
      emailValidation.isValid &&
      passwordValidation.isValid &&
      confirmPasswordValidation.isValid
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    navigate(ROUTES.LOGIN);
  };

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Get started with your free account today
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                error={errors.firstName}
                required
                autoComplete="given-name"
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                error={errors.lastName}
                required
                autoComplete="family-name"
              />
            </div>

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange("email")}
              error={errors.email}
              required
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange("password")}
              error={errors.password}
              helperText="Must be at least 8 characters with uppercase, lowercase, number, and special character"
              required
              autoComplete="new-password"
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              error={errors.confirmPassword}
              required
              autoComplete="new-password"
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                required
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the{" "}
                <Link to="/terms" className="text-primary-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-primary-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <Button type="submit" fullWidth isLoading={isLoading}>
              Create Account
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Already have an account?{" "}
              <Link
                to={ROUTES.LOGIN}
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
