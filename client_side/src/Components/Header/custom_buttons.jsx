import { Box, Typography,Button, Badge,styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import LoginDialog from '../Login/login';
import {DataContext}  from '../../Context/dataprovider';
import Profile from './profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

    const Container = styled(Link)(({ theme }) => ({
        display: 'flex',
        textDecoration:'none',
        color:'inherit',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }));


        const LoginButton = styled(Button)`
            color: #ffffff;
            background: #009933;
            textTransform: none;
            fontWeight: 600;
            borderRadius: 40;
            padding: 5px 40px;
            height: 35px; 
            boxShadow: none;
            marginTop:8px;
           
            :hover {
                background: #00cc00;
            }
            `;


    const CustomButtons = () => {

        const [open, setOpen] = useState(false);
    
        const openDialog = () => {
            setOpen(true);
        }
        const { account, setAccount} = useContext(DataContext);
        const { cartItems }=useSelector(state => state.cart);

        return (
            <Wrapper>
                   {
                account ? <Profile account={account} setAccount={setAccount}/>:
                    <LoginButton style={{ marginLeft:65,borderRadius: 20}}variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
                <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart style={{marginLeft:59}}/>
                </Badge>
                    <Typography style={{ marginLeft: 3 ,marginTop:3}}>Cart</Typography>
                </Container>
                <LoginDialog open={open} setOpen={setOpen}/>
            </Wrapper>
        )
    }
    
    export default CustomButtons;