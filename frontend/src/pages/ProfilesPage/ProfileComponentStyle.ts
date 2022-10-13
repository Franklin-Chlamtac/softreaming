import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 200px;
    height: 253px;
    text-align: center;
    cursor: pointer;
`;

export const ProfileIcon = styled.img`
  width: 100%;
  max-width: 200px;
  height: 100%;
  object-fit: cover;
`;

export const ProfileIconWrapper = styled.div`
  width: 100%;
  min-width: 200px;
  height: 200px;
`;

export const ProfileName = styled.p`
  color: ${({ theme }) => theme.colors.midGray};
  font-size: ${({ theme }) => theme.fonts.size.bigSize1};
  margin: 0.5rem 0;
`;