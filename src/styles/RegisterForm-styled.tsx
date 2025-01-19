import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const StyledForm = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 10vw;
    margin-top: 10vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 30vw;
    background-color: #3C4354;
    border-radius: 50px;
`;

export const H1 = styled.h1`
    text-align: center;
    font-style: 'Inter', regular;
    font-weight: 400;
    font-size: 34px;
    color: white;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const User_Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Username',
})`
    width: 24.4vw;
    height: 5vh;
    margin-left: 2vw;
    margin-bottom: 10px;
    background-color: #464E63;
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    border-radius: 15px;
    border: none;
    ::placeholder {
        color: #aaa;
        font-size: 1rem;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
        font-size: 0.8rem;
        color: #ddd;
        transform: translateY(-10px); 
        transition: all 0.3s ease-in-out;
    }

    &:not(:focus)::placeholder {
        font-size: 1rem;
        color: #aaa;
        transform: translateY(0); 
        transition: all 0.3s ease-in-out;
    }
`;

export const Phone_Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Phone Number',
})`
    width: 24.4vw;
    height: 5vh;
    margin-left: 2vw;
    margin-bottom: 10px;
    background-color: #464E63;
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    border-radius: 15px;
    border: none;
    ::placeholder {
        color: #aaa;
        font-size: 1rem;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
        font-size: 0.8rem;
        color: #ddd;
        transform: translateY(-10px); 
        transition: all 0.3s ease-in-out;
    }

    &:not(:focus)::placeholder {
        font-size: 1rem;
        color: #aaa;
        transform: translateY(0); 
        transition: all 0.3s ease-in-out;
    }
`;

export const Email_Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Email',
})`
    width: 24.4vw;
    height: 5vh;
    margin-left: 2vw;
    margin-bottom: 10px;
    background-color: #464E63;
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    border-radius: 15px;
    border: none;
    ::placeholder {
        color: #aaa;
        font-size: 1rem;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
        font-size: 0.8rem;
        color: #ddd;
        transform: translateY(-10px); 
        transition: all 0.3s ease-in-out;
    }

    &:not(:focus)::placeholder {
        font-size: 1rem;
        color: #aaa;
        transform: translateY(0); 
        transition: all 0.3s ease-in-out;
    }
`;

export const Password_Input = styled.input.attrs({
    type: 'password',
    placeholder: 'Password',
})`
    width: 24.4vw;
    height: 5vh;
    margin-left: 2vw;
    margin-bottom: 10px;
    background-color: #464E63;
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    border-radius: 15px;
    border: none;
    ::placeholder {
        color: #aaa;
        font-size: 1rem;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
        font-size: 0.8rem;
        color: #ddd;
        transform: translateY(-10px); 
        transition: all 0.3s ease-in-out;
    }

    &:not(:focus)::placeholder {
        font-size: 1rem;
        color: #aaa;
        transform: translateY(0); 
        transition: all 0.3s ease-in-out;
    }
`;

export const Confirm_Password_Input = styled.input.attrs({
    type: 'password',
    placeholder: 'Confirm Password',
})`
    width: 24.4vw;
    height: 5vh;
    margin-left: 2vw;
    margin-bottom: 10px;
    background-color: #464E63;
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding-left: 1vw;
    border-radius: 15px;
    border: none;
    ::placeholder {
        color: #aaa;
        font-size: 1rem;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
    }

    &:focus::placeholder {
        font-size: 0.8rem;
        color: #ddd;
        transform: translateY(-10px); 
        transition: all 0.3s ease-in-out;
    }

    &:not(:focus)::placeholder {
        font-size: 1rem;
        color: #aaa;
        transform: translateY(0); 
        transition: all 0.3s ease-in-out;
    }
`;

export const Button = styled.div`
    width: 25.5vw;
    padding-bottom: 2vh;
    padding-top: 1vh;
    /* margin-left: 2vw; */
    margin-bottom: 10px;
    background-color: #58637D;
    text-align: center;
    border-radius: 100px;
    &:hover {
        background-color: #496dc2;
        transition: 0.3s ease-in-out;
    }
    transition: 0.3s ease-in-out;
`;

export const Linkses = styled.div`
    display: flex;
    justify-content: center;
`

export const P = styled.p`
    width: 13vw;
    text-align: center;
    color: white;
    margin-top: 10px;
    margin-left: -1vw;
`

export const StyledLink = styled(Link)`
    color: #58637D;
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
    color: #FFFFFF;
    width: 25.5vw;
    border-radius: 100px;
    margin-left: 2vw;
`;

export const StyledLinkLogin = styled(Link)`
    color: #58637D;
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
    color: #FFFFFF;
    /* width: 25.5vw; */
    border-radius: 100px;
    /* margin-left: 2vw; */
    color: #0088FF;
    &:hover {
        color: #496dc2;
        transition: 0.3s ease-in-out;
    }
    transition: 0.3s ease-in-out;
`;

