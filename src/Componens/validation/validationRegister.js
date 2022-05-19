import * as yup from 'yup';

export const validationRegister = yup.object({
    userName: yup.string().required("Please Enter your username").min(2, "Mininum 2 characters")
                .max(30, "Maximum 30 characters"),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirmPassword: yup
        .string()
        .required('Please Enter your confirm password').oneOf([yup.ref("password"), null], "Passwords must match")
})