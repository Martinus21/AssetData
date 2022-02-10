import styled from "styled-components";

const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardLogin = styled.div`
    width: 30%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 0px 20px #888888;
`;

const BtnForgotPasswordLogin = styled.button`
    border: 1px solid #0d6efd;
    color: #0d6efd;
`;

export { LoginContainer, CardLogin, BtnForgotPasswordLogin }