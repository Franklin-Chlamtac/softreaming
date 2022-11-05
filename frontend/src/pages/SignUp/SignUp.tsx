import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation }  from "./schema";
import { HomepageContainer, EnterPageWrapper, LogoWrapper, LogoLink, Logo, LoginFormWrapper, FormTitle, FormInput, FormInputSubmit } from "./style";
import LogoImage from "../../assets/LogoNetflix.png";





const Form: React.FC = () => {
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(loginValidation)
    });

    const submitForm = (data:FieldValues) =>{
        console.log(data)
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
                            <FormInput type="text" placeholder="Digite seu nome..." {...register("email")}/>
                            {errors.userName?.message && <p>errors.userName?.message</p>}
                            <FormInput type="text" placeholder="Digite seu Email" {...register("email")}/>
                            {errors.email?.message && <p>errors.email?.message</p>}
                            <FormInput type="password" placeholder="Digite sua senha..." {...register("email")}/>
                            {errors.password?.message && <p>errors.password?.message</p>}
                            <FormInput type="password" placeholder="Confirme sua senha..." {...register("email")}/>
                            {errors.confirmPassword && <p>As senhas precisam ser iguais!</p>}
                            
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

