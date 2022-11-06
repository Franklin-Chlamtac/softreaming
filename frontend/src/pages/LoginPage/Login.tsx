import React from "react";
import { FormInput, FormInputSubmit, FormTitle,
     HomepageContainer, LoginWrapper, Logo,
     LogoLink, LogoWrapper, PageWrapper} from "./style";
import LogoImage from "../../assets/LogoNetflix.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "./schema";
import { useForm, FieldValues } from "react-hook-form";

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginValidation)
    });

    const submitForm = (data:FieldValues) =>{
        console.log(data)
    };

    return(
        <>
            <HomepageContainer>
                <PageWrapper>
                    <LogoWrapper>
                        <LogoLink to="/">
                            <Logo src={LogoImage} alt="logo da netlix"/>
                        </LogoLink>
                    </LogoWrapper>
                    <LoginWrapper>
                        <FormTitle>Login</FormTitle>

                        <div className="LoginForm">
                            <div className="title">Bem-vindo</div>
                            <div className="inputs">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <FormInput type="text" placeholder="E-mail" {...register("email")}/>
                                    <FormInput type="password" placeholder="Senha"{...register("password")}/>
                                    <FormInputSubmit  type="submit" value="Entrar"/>
                                </form>
                            </div>
                        </div>
                    </LoginWrapper>
                </PageWrapper>
            </HomepageContainer>
        </>
    )
}

export default LoginForm;