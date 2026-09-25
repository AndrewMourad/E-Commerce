"use server";

import { loginData } from "@/app/(auth)/login/page";
import { userData } from "@/app/(auth)/register/page";
import { cookies } from "next/headers";

export async function userRegister(data: userData) {
  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const payload = await response.json();

    console.log(payload);

    return response.ok;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function forgotPass(email: string) {
  const response = await fetch(`${process.env.API}/auth/forgotPasswords`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const payload = await response.json();
  return payload;
}

export async function verifyCode(resetCode: string) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resetCode }),
  });
  const payload = await response.json();
  return payload;
}

export async function resetPass(email: string, newPassword: string) {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, newPassword }),
  });
  const payload = await response.json();
  return payload;
}
