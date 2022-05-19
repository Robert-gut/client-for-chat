import * as yup from "yup";

export const validationLogin = yup.object({
    userName: yup.string().required("Required"),
    password: yup
        .mixed()
        .required("Required"),
});
