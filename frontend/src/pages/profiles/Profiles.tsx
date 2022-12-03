import React, { useEffect, useState } from "react";
import { AddProfileButtonWrapper, AddProfileImage, AddProfileImageWrapper, AddProfileText, AddProfileTextWrapper, Background, CreateProfile, Logo, LogoLink, LogoWrapper, ProfilesRow, ProfilesTitle, ProfilesWrapper } from "./style";
import LogoNetflix from "../../assets/LogoNetflix.png";
import Add from "../../assets/Add.png";
import { UserProfiles } from "../../types/ProfileType";
import { api } from "../../hooks/useApi";
import ProfileBanner from "./profileBanner";



const Profiles: React.FC = () => {
    const userProfiles = [
        {id: 1, profileName: "Franklin", profileUrlImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeWQ6LbNg5TpGgicv-tOm8URVdR4yD42NxFVjKqs&s"},
        {id: 2, profileName: "juao", profileUrlImage:"https://www.mundoecologia.com.br/wp-content/uploads/2019/10/P%C3%B4nei-Shetland-Americano-Branco-Trotando-na-Grama.jpg"},
        {id: 3, profileName:"vynycyws", profileUrlImage:"https://feijoadasimulator.top/br/sources/15020.jpeg"},
        {id: 4, profileName:"cabesa", profileUrlImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGt9AlnXv82OaGrBG_vykvbL5EeoFEOstD6Q&usqp=CAU"},
    ]

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
                {userProfiles.map((profile) => (
                    <ProfileBanner key={profile.id} profileName={profile.profileName}
                    profileUrlImage={profile.profileUrlImage}/>
                    ))}
                    
                    <AddProfileButtonWrapper>
                        <AddProfileImageWrapper>
                            <CreateProfile to="/createprofile">
                                <AddProfileImage src={Add}/>
                            </CreateProfile>
                            
                            
                            <AddProfileTextWrapper>
                                <AddProfileText>
                                    Criar perfil
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