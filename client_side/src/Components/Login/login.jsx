import React, { useState, useContext } from 'react';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';
import {DataContext} from '../../Context/dataprovider';

const Component = styled(DialogContent)`
    height: 60vh;
    width: 50vh;
    padding: 0; 
    padding-top: 0;
`;

const Wrapper = styled(Box)`
    padding: 5px 30px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
    `;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #009933;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #65cf3c;
    :hover {
        background: #00cc00;
    }
`;

const CreateAccount = styled(Button)`
  
text-transform: none;
background: #FFA500;
color: #ffffff;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 #e6a955;
:hover {
    background: #ffc14d;
}

`;

const accountInitialValues = {
    login: {
        view: 'login',
    },
    signup: {
        view: 'signup',
    }
}

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const LoginDialog = ({ open,setOpen}) => {
    
    const [ error, setError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const {setAccount} = useContext(DataContext);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);

    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    
    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
  
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(response.status ===200) {
        handleClose();
        setAccount('Hi '+response.data.data.firstname);
        }
        else {
            setError(true);
         
        }
    }

        return (
            <Dialog open={open} onClose={handleClose}>
                <Component>
                    <Box style={{display: 'flex', height: '100%'}}>
                        {
                            account.view === 'login' ? 
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                                { error && <Error>Please enter valid username or password</Error> }
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                <Text>By continuing, you agree to mkc store's terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Text style={{textAlign:'center'}}>OR</Text>
                                <CreateAccount onClick={() => toggleSignup()}>New to mkc store? Create an account</CreateAccount>
    
                            </Wrapper> : 
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </Wrapper>
                        }
                    </Box> 
                </Component>
            </Dialog>
        )
    }
    
    export default LoginDialog;