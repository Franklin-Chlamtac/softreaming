import React from "react";
import { FormInput, FormTitle, LoginFormWrapper, Logo, LogoLink, LogoWrapper, PageWrapper, FormInputSubmit } from "./style"
import LogoImage from "../../../assets/LogoNetflix.png";
import axios from "axios";
import { loginValidation } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const ProfileForm: React.FC = ()=> {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginValidation)
        
    });

    const url = ""

    const navigate = useNavigate();

    const submitForm = (data:FieldValues) =>{
        console.log(data)
        axios.post(url, data)
        navigate("/profiles")
    };
    return(
        <PageWrapper>
            <LogoWrapper>
                <LogoLink to="/">
                    <Logo src={LogoImage}/>
                </LogoLink>
            </LogoWrapper>
            <LoginFormWrapper>
                <FormTitle>Criar perfil</FormTitle>

                <div className="profileForm">
                    <div className="inputs">
                        <form onSubmit={handleSubmit(submitForm)}>
                            <FormInput type="text" placeholder="Insira um nome" {...register("name")}/>
                            <FormInput type="text" placeholder="URL da imagem" {...register("imgURL")}/>
                            <FormInputSubmit type="submit" value="Criar"/>
                        </form>
                    </div>
                </div>
            </LoginFormWrapper>

        </PageWrapper>
    )
}

export default ProfileForm;