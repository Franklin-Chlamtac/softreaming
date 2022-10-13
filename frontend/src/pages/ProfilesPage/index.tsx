import React, { useState } from "react";
import ProfileBannerComponent from "./ProfileComponent";
import LogoNetflix from "../../assets/LogoNetflix.png";
import {
    AddProfileButtonWrapper,
    AddProfileImage,
    AddProfileImageWrapper,
    AddProfileText,
    AddProfileTextWrapper,
    CreateProfile,
    Logo,
    LogoContainer,
    LogoWrapper,
    ManageProfilesButton,
    ManageProfilesButtonWrapper,
    ProfileNotFoundText,
    ProfilesButtonText,
    ProfilesContainer,
    ProfilesNotFound,
    ProfilesNotFoundWrapper,
    ProfilesPageWrapper,
    ProfilesTitle,
    ProfilesTitleContainer,
    ProfilesWrapper,
    TextToCreateProfile,
  } from "./style";
import { UserProfiles } from "../../types/Profiles";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Add from "../../assets/Add.png"

const ProfilesPage: React.FC = () => {
    const handleClick = () => {
        console.log("Indo pra criação de perfis");
    };
    const [userProfiles, setUserProfiles] = useState<UserProfiles>();
    return (
        <ProfilesPageWrapper>
          <LogoContainer>
            <LogoWrapper>
              <Logo src={LogoNetflix} alt="logotipo da softreaming" />
            </LogoWrapper>
          </LogoContainer>
          <ProfilesContainer>
            <ProfilesTitleContainer>
              <ProfilesTitle>Quem está assistindo?</ProfilesTitle>
            </ProfilesTitleContainer>
            <ProfilesWrapper>
              
              
              {userProfiles.map((profile) => (
                  <ProfileBannerComponent
                    key={profile.id}
                    profileName={profile.profileName}
                    profileUrlImage={profile.profileUrlImage}
                  />
                ))}
              {userProfiles &&
                userProfiles?.length >= 1 &&
                userProfiles?.length <= 3 && (
                  <AddProfileButtonWrapper onClick={handleClick}>
                    <AddProfileImageWrapper>
                      <AddProfileImage src={Add} />
                    </AddProfileImageWrapper>
                    <AddProfileTextWrapper>
                      <AddProfileText>Adicionar Perfil</AddProfileText>
                    </AddProfileTextWrapper>
                  </AddProfileButtonWrapper>
                )}
            </ProfilesWrapper>
            {userProfiles && userProfiles?.length > 0 && (
              <ManageProfilesButtonWrapper>
                <ManageProfilesButton to="/profiles/manage-profiles">
                  <ProfilesButtonText>Gerenciar Perfis</ProfilesButtonText>
                </ManageProfilesButton>
              </ManageProfilesButtonWrapper>
            )}
          </ProfilesContainer>
        </ProfilesPageWrapper>
      );
    };

export default ProfilesPage;

