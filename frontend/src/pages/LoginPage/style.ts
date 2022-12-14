import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const HomepageContainer = styled.header`
    height: 100vw;
    max-width: 100vw;
    background-image: url("./../src/assets/Netflix_poster.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const PageWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(
        ellipse, rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 90%
    );
    background-color: rgba(0, 0, 0, 0.3);
`;

export const LogoWrapper = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 2.8120rem;
    width: 10.4370rem;
    margin-left: 60px;
`;

export const LogoLink = styled(Link)``;

export const ProfileLink = styled(Link)``;

export const LoginWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 400px;
    margin: 0 auto;
    padding: 43px 43px;
`;

export const FormTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin-bottom: 28px;
`;

export const FormInput = styled.input`
    background: #333;
    outline: none;
    border: 0;
    border-radius: 4px;
    color: #fff;
    padding: 15px;
    width: 100%;
    margin-bottom: 0.6rem;
`;

export const FormInputSubmit = styled(FormInput)`
    ${({ theme }) => css`
        background: ${theme.colors.redColor};
        font-size: ${theme.fonts.size.mediumSize};
        font-weight: ${theme.fonts.weight.bold};
    `}
    margin: 1rem auto;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;

export const FormErrorMessageWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ErrorMessage = styled.span`
  color: #f8d7da;
  font-size: 14px;
`;