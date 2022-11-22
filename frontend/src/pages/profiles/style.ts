import styled from "styled-components";
import { Link } from "react-router-dom";



export const Background = styled.div`

    width: 100vw;
    height: 100vw;
    background-color: (0, 0, 0.9);
`;

export const LogoWrapper = styled.div`
    margin-top: 10px;
    width:100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
  height: 2.8125rem;
  width: 10.4375rem;
  margin-left: 60px;
`;

export const LogoLink = styled(Link)``;

export const ProfilesRow = styled.div`
    margin-top: 100px;
    width: 100%;
    padding: 0 50px;
    height: calc(100vh-80px);
    display: flex;
    flex-direction: column;
`;

export const ProfilesTitle = styled.h1`

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  font-size: ${({ theme }) => theme.fonts.size.extraBig};
  text-shadow: 1px 1px 1px black;
`;

export const ProfilesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
`;

export const CreateProfile = styled(Link)``;

export const AddProfileButtonWrapper = styled.div`
  width: 200px;
  height: 253px;
  cursor: pointer;
`;

export const AddProfileImageWrapper = styled.div`
  width: 100%;
  height: calc(253px - 53px);
  &:hover {
    opacity: 0.9;
  }
`;

export const AddProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AddProfileTextWrapper = styled.div`
  height: 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
`;

export const AddProfileText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fonts.size.mediumBigSize};
  margin: 0.5rem 0;
`;