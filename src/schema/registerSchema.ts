import * as zod from "zod";

export let schema = zod
  .object({
    name: zod
      .string()
      .nonempty("Name is Required")
      .min(3, "Min 3 Letters")
      .max(8, "Max 8 Letters"),
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
    rePassword: zod.string().nonempty("Confirm your password"),
    phone: zod
      .string()
      .nonempty("Phone number is required")
      .regex(/^01[0125][0-9]{8}$/, "Invalid phone number"),
  })
  .refine(
    (obj) => {
      return obj.password === obj.rePassword;
    },
    { path: ["rePassword"], message: "Password not matched" },
  );
