import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation }  from "./schema";
import { HomepageContainer, EnterPageWrapper, LogoWrapper, 
  LogoLink, Logo, LoginFormWrapper, 
  FormTitle, FormInput, FormInputSubmit } from "./style";
import LogoImage from "../../assets/LogoNetflix.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Api from "../../services/Api";



interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
    const navigate = useNavigate();
    const [errorMsg,  setErrorMsg] = useState('')

    const {
      register,
      handleSubmit,
      setError,
      formState:{errors},
    } = useForm<SignUpForm>();

    const onSubmit: SubmitHandler<SignUpForm> = ({
      name,
      email,
      password
    }) => {
      createUser({name, email,password});
    }

    const createUser = async (payload:SignUpForm) => {
      try {
        await Api.post(`/user`,payload);
        console.log("usuario criado", payload);
        navigate("/login");
        
        
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

    return (
        <>
          <HomepageContainer>
            <EnterPageWrapper>
              <LogoWrapper>
                <LogoLink to="/">
                  <Logo src={LogoImage} alt="logo da netflix" />
                </LogoLink>
              </LogoWrapper>
              <LoginFormWrapper>
                <FormTitle>Cadastrar</FormTitle>

                <div className="Form">
                    <div className="title">Cadastro</div>
                    <div className="inputs">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormInput type="text" placeholder="Digite seu nome..." {...register("name")}/>
                            
                            <FormInput type="text" placeholder="Digite seu Email" {...register("email")}/>
                            
                            <FormInput type="password" placeholder="Digite sua senha..." {...register("password")}/>
                            
                            <FormInput type="password" placeholder="Confirme sua senha..." {...register("password")}/>
                            
                            
                            <FormInputSubmit type="submit" value="Cadastrar"/>
                            {errorMsg && (<p style={{color: "red"}}>
                              {errorMsg}
                            </p>)}

                            

                </form>
            </div>
        </div>
              </LoginFormWrapper>
            </EnterPageWrapper>
          </HomepageContainer>
        </>
      );

}

export default Form;

