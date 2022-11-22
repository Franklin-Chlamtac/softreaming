import React from "react";
import { FormInput, FormTitle, LoginFormWrapper, Logo, LogoLink, LogoWrapper, PageWrapper, FormInputSubmit } from "./style"
import LogoImage from "../../../assets/LogoNetflix.png";
import axios from "axios";
import { loginValidation } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from "react-hook-form";


const ProfileForm: React.FC = ()=> {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginValidation)
    });

    const url = ""
    const submitForm = (data:FieldValues) =>{
        axios.post(url, data)
    };
    return(
        <PageWrapper>
            <LogoWrapper>
                <LogoLink to="/">
                    <Logo src={LogoImage}/>
                </LogoLink>
            </LogoWrapper>
            <LoginFormWrapper>
                <FormTitle>Criar usuário</FormTitle>

                <div className="profileForm">
                    <div className="inputs">
                        <form onSubmit={handleSubmit(submitForm)}>
                            <FormInput type="text" placeholder="Insira um nome" {...register("name")}/>
                            <FormInput type="text" placeholder="URL da imagem" {...register("imgURL")}/>
                            <FormInputSubmit type="submit" value="Create"/>
                        </form>
                    </div>
                </div>
            </LoginFormWrapper>

        </PageWrapper>
    )
}

export default ProfileForm;