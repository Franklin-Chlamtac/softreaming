import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation }  from "./schema";
import { HomepageContainer, EnterPageWrapper, LogoWrapper, 
  LogoLink, Logo, LoginFormWrapper, 
  FormTitle, FormInput, FormInputSubmit } from "./style";
import LogoImage from "../../assets/LogoNetflix.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const Form: React.FC = () => {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginValidation)
    });

    const url = ""
    const navigate = useNavigate();

    const submitForm = (data:FieldValues) =>{
        axios.post(url, data)
        console.log(data)
        navigate("/login");
    };

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
                        <form onSubmit={handleSubmit(submitForm)}>
                            <FormInput type="text" placeholder="Digite seu nome..." {...register("userName")}/>
                            
                            <FormInput type="text" placeholder="Digite seu Email" {...register("email")}/>
                            
                            <FormInput type="password" placeholder="Digite sua senha..." {...register("password")}/>
                            
                            <FormInput type="password" placeholder="Confirme sua senha..." {...register("password")}/>
                            
                            
                            <FormInputSubmit type="submit" value="Cadastrar"/>
                            

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

