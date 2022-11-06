import React from "react";
import { EnterLink, 
  EnterPageWrapper, 
  HomepageContainer, 
  Logo, 
  LogoWrapper, 
  StoryCard, 
  StoryCardSubtitle, 
  StoryCardText, 
  StoryCardTitle, 
} from "./style";
import LogoNetflix from "../../assets/LogoNetflix.png";
import Form from "../SignUp/SignUp";



const Homepage: React.FC = () => {
    return (
      <>
        <HomepageContainer>
          <EnterPageWrapper>
            <LogoWrapper>
              <Logo src={LogoNetflix} alt="logo da netflix" />
              <EnterLink to={"/Login"}>Entrar</EnterLink>
            </LogoWrapper>
            <StoryCard>
              <StoryCardTitle>
                Filmes, séries e muito mais. Sem limites.
              </StoryCardTitle>
              <StoryCardSubtitle>
                Assista onde quiser. Cancele quando quiser.
              </StoryCardSubtitle>
              <StoryCardText>
                Pronto para assistir? Clique no botão <EnterLink to={"/SignUp"}>Cadastrar</EnterLink> para
                acessar a sua conta ou realizar o seu cadatro!
              </StoryCardText>
            </StoryCard>
          </EnterPageWrapper>
        </HomepageContainer>
      </>
    );
  };
export default Homepage;