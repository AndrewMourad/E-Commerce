"use client";
import { verifyCode } from "@/api/actions/auth.actions";
import { toast } from "@/components/ui/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function VerifyResetCode() {
  const router = useRouter();
  const [resetCode, setResetCode] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await verifyCode(resetCode);
    if (response.status == "Success") {
      toast.add({
        type: "success",
        description: "Code verifed successfully",
      });
      router.push(`/resetpassword`);
    } else {
      toast.add({
        type: "error",
        description: "Worng code",
      });
    }
  }
  return (
    <div className="w-1/2 mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-green-600">
              Fresh<span className="text-gray-800">Cart</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600">
            Enter the 6-digit code sent to your Email
          </p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-green-600" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                id="resetCode"
                maxLength={6}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all text-center text-2xl tracking-[0.5em] font-mono"
                placeholder="••••••"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                name="resetCode"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify Code
          </button>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
              href="/login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Sign In
            </Link>
          </div>
        </form>
        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Remember your password?{" "}
            <Link
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
              href="/login"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
