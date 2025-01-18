import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormContainer, StyledForm, Password_Input, User_Input, RegisterContainer, Button, H1, Phone_Input, Email_Input, Confirm_Password_Input, StyledLink, Linkses, P, StyledLinkLogin } from '../../styles/RegisterForm-styled';

export const RegisterForm = () => {
    return (
        <RegisterContainer>
            <StyledForm>
            <Form>
            <H1>Sing in</H1>
            <FormContainer>
                <User_Input type="text" id="username" name="username" />
                <Phone_Input type="text" id="phone" name="phone" />
                <Email_Input type="text" id="email" name="email" />
                <Password_Input id="password" name="password" />
                <Confirm_Password_Input id="confirm_password" name="confirm_password" />
                <StyledLink to="/login"><Button>Register</Button></StyledLink>
            </FormContainer>
            <Linkses>
            <P>Already have an account?</P>
            <StyledLinkLogin to="/login">Login here</StyledLinkLogin>
            </Linkses>
            </Form>
            </StyledForm>
        </RegisterContainer>
    );
}