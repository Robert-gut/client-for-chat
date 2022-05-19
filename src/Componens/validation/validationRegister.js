import * as yup from 'yup';

export const validationRegister = yup.object({
    userName: yup.string().required("Required"),
    password1: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    password2: yup
        .string()
        .required('Please Enter your new password').oneOf([yup.ref("Password"), null], "Passwords must match")
})