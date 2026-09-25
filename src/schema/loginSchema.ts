import * as zod from "zod";

export let loginSchema = zod.object({
  email: zod
    .string()
    .nonempty("Email is Required")
    .email("Check your email format (e.g., name@example.com)."),
  password: zod
    .string()
    .nonempty("Password is Required")
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password must contain 8+ characters, an uppercase letter, a lowercase letter, a number, and a special character.",
    ),
});
