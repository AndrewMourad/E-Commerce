"use client";

import { resetPass } from "@/api/actions/auth.actions";
import { toast } from "@/components/ui/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ResetPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("resetEmail");

    if (!savedEmail) {
      router.replace("/forgotpassword");
      return;
    }

    setEmail(savedEmail);
  }, [router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      toast.add({
        type: "error",
        description: "Please restart the password reset process",
      });
      router.replace("/forgotpassword");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.add({
        type: "error",
        description: "Passwords do not match",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast.add({
        type: "error",
        description: "Password must be at least 8 characters",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await resetPass(email, newPassword);

      if (response.status === "Success") {
        sessionStorage.removeItem("resetEmail");

        toast.add({
          type: "success",
          description: "Password changed successfully",
        });

        router.push("/login");
      } else {
        toast.add({
          type: "error",
          description: response.message || "Unable to reset password",
        });
      }
    } catch {
      toast.add({
        type: "error",
        description: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-3xl font-bold text-green-600">
              Fresh
              <span className="text-gray-800">Cart</span>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Reset Password
          </h1>

          <p className="text-gray-600">
            Create a new password for your account
          </p>

          <p className="text-sm text-gray-500 mt-3 break-all">{email}</p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white">
              ✓
            </div>

            <div className="w-12 sm:w-16 h-0.5 mx-2 bg-green-600" />
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white">
              ✓
            </div>

            <div className="w-12 sm:w-16 h-0.5 mx-2 bg-green-600" />
          </div>

          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white ring-4 ring-green-100">
            3
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              New Password
            </label>

            <div className="relative">
              <input
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 pr-16 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                placeholder="Enter new password"
                type={showPassword ? "text" : "password"}
                name="password"
                minLength={8}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-green-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 pr-16 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                placeholder="Confirm new password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                minLength={8}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-green-600"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>

          <div className="text-center">
            <Link
              className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
              href="/login"
            >
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
