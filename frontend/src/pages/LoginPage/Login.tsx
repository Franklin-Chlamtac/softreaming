import React, { useState } from "react";
import { FormInput, FormInputSubmit, FormTitle,
     HomepageContainer, LoginWrapper, Logo,
     LogoLink, LogoWrapper, PageWrapper, ProfileLink} from "./style";
import LogoImage from "../../assets/LogoNetflix.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "./schema";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Api from "../../services/Api";
import { Navigate, useNavigate } from "react-router-dom";


interface LoginForm {
    email: string;
    password: string;
}
const LoginPage2: React.FC = () => {
    const navigate = useNavigate();
    const [errorMsg,  setErrorMsg] = useState('')

    const {
        register,
        handleSubmit,
        setError,
        formState:{ errors },
    } = useForm<LoginForm>();

    const onSubmit: SubmitHandler<LoginForm> = ({ email, password }) => {
        authenticate({ email, password });
        
    }

    const authenticate = async (payload: LoginForm) => {
        try {
            const { data } = await Api.post(`/user/authenticate`, payload);
            localStorage.setItem("token", data.token);
            navigate("/profiles");
            
        } catch (error: any) {
            console.log(error)
            setError("password", { message: "credenciais inválidas"});
            const {message} = error.response.data
            if(message){
                setErrorMsg(error.response.data.message)
            } else {
                setErrorMsg("alguma coisa")
            }
            
            console.log(errorMsg);
        }
    }

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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormInput type="text" placeholder="E-mail" {...register("email")} required/>
                                    <FormInput type="password" placeholder="Senha"{...register("password")} required/>
                                    
                                    <FormInputSubmit  type="submit" value="Entrar"/>        
                                    {errorMsg && (<p style={{color: "red"}}>
                                        Credenciais inválidas!
                                    </p>)}       
                                </form>
                            </div>
                        </div>
                    </LoginWrapper>
                </PageWrapper>
            </HomepageContainer>
        </>
    )
}

export default LoginPage2;