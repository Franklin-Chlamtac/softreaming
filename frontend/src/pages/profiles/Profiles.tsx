import React from "react";
import { AddProfileButtonWrapper, AddProfileImage, AddProfileImageWrapper, AddProfileText, AddProfileTextWrapper, Background, CreateProfile, Logo, LogoLink, LogoWrapper, ProfilesRow, ProfilesTitle, ProfilesWrapper } from "./style";
import LogoNetflix from "../../assets/LogoNetflix.png";
import Add from "../../assets/Add.png";


const Profiles: React.FC = () => {
    return(
        <Background>
            <LogoWrapper>
                <LogoLink to="/">
                    <Logo src={LogoNetflix}/>
                </LogoLink>
            </LogoWrapper>
            <ProfilesRow>
                <ProfilesTitle>Quem está assistindo?</ProfilesTitle>
                <ProfilesWrapper>
                    
                    <AddProfileButtonWrapper>
                        <AddProfileImageWrapper>
                            <CreateProfile to="/createprofile">
                                <AddProfileImage src={Add}/>
                            </CreateProfile>
                            
                            
                            <AddProfileTextWrapper>
                                <AddProfileText>
                                    Criar usuário
                                </AddProfileText>
                            </AddProfileTextWrapper>
                        </AddProfileImageWrapper>
                    </AddProfileButtonWrapper>
                </ProfilesWrapper>
            </ProfilesRow>

        </Background>
    )
}

export default Profiles;