import React from "react";
import * as yup from "yup";

export const loginValidation = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null])
})



