import * as Yup from "yup";

export const contactUsSchema = Yup.object({
  fullName: Yup.string()
    .matches(
      /\b(\w+\s+\w+)\b/,
      "Full Name must contain both first and last name"
    )
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Mobile Number is required"),
  message: Yup.string()
    .min(50, "Message needs to 50 words")
    .required("Message is required"),
});
