import React from "react";
import * as yup from "yup";

export const loginValidation = yup.object().shape({
    name: yup.string().required(),
    imgURL: yup.string().required()
    
})



