import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  height: 100vw;
  width: 100vw;
  background: radial-gradient(
    ellipse,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 90%
  );
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 2.8125rem;
  width: 10.4375rem;
  margin-left: 60px;
`;

export const LoginFormWrapper = styled.div`
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 400px;
  margin: 0 auto;
  padding: 40px 40px;
  max-width: 500px;
  width: 100%;
`;

export const FormTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  margin-bottom: 28px;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const FormInput = styled.input`
  background: #333;
  outline: none;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 15px;
  width: 100%;
  margin-bottom: 0.5rem;
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

export const ErrorMessage = styled.p`
  color: #f8d7da;
  font-size: 14px;
`;

export const LogoLink = styled(Link)``;