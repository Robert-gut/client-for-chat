import * as yup from "yup";

export const validationLogin = yup.object({
    userName: yup.string().required("Please Enter your username"),
    password: yup
        .mixed()
        .required("Please Enter your password"),
});
