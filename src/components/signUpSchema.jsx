import * as Yup from "yup";

export const signUpShema = Yup.object().shape({
  fullName: Yup.string()
    .max(20, "Must be 20 or less characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Please enter a valid email adress")
    .required("Please enter your email adress"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters ")
    .max(16, "Must be a maximum of 16 characters")
    .required()
    .matches(/\d+/, "Password must contains numbers")
    .matches(/[a-z]+/, "Password must contain lowercase letters")
    .matches(/[A-Z]+/, "Password must contain uppercase letters")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain special characters"),
});
