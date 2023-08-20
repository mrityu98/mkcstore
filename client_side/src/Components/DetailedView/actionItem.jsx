import { useState,useContext } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { Button, Box, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import LoginDialog from '../Login/login';
import {DataContext}  from '../../Context/dataprovider';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px',
    width:'95%',
    marginLeft:25
   
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '38%',
    height: '50px',
    borderRadius:2,
    [theme.breakpoints.down('lg')]: {
        width:'36%'
    },
    [theme.breakpoints.down('sm')]: {
        width:'38%'
    }
}))

 
const ActionItem = ({product})=>{

    const navigate = useNavigate();
    const { id } = product;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { account, setAccount} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    
    const openDialog = () => {
        setOpen(true);
    }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity)); 
        navigate('/cart');
    }

const loadScript = (src) => {
    return new Promise((resolve)=>{
        const script=document.createElement('script')
        script.src=src;
        script.onload =()=>{
            resolve(true)
        }
         script.onerror =()=>{
            resolve(false)
        }
        document.body.appendChild(script);
    })
}
    const buyNow = async (amount) => {
      if (account){
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      if(!res){
        alert('Something went wrong')
        return;
      }

      const options={
        key:"rzp_test_TCvaYNTOnlpJ6P",
        currency:"INR",
        amount:amount*100,
        name:"mkc store",
        description:"Thanks for purchasing",
        handler: function (response) {
        navigate('/');
      },
      prefill: {
        name: "mkcfromiiest",
      },
    };
 
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    }
else{
    openDialog();
    
}};


    return (
        <LeftContainer>
            <Box style={{padding:'15px 20px',width: '67%'}}>
            <Image src={product.detailUrl} alt="product"/><br />
            </Box>
            <StyledButton onClick={() => addItemToCart()} style={{marginLeft:25,marginRight: 10, background: '#009933'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow(product.price.cost+40)} style={{ background: '#009933'}} variant="contained"><Flash /> Buy Now</StyledButton>
            <LoginDialog open={open} setOpen={setOpen}/>
        </LeftContainer>
    )
}



export default ActionItem;