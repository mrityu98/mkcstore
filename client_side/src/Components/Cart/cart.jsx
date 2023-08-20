import { useEffect, useState,useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { Box, Typography, Button, Grid, styled } from '@mui/material';
import { useParams,useNavigate,redirect } from 'react-router-dom';
import LoginDialog from '../Login/login';
import TotalView from './totalView';
import CartItem from './cartItem'
import EmptyCart from './emptyCart';
import {DataContext}  from '../../Context/dataprovider';

const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border: 2px solid #4d94ff;
`;

const BottomWrapper = styled(Box)`
padding: 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #4d94ff;
color: #fff;
border-radius: 2px;
width: 250px;
height: 50px;
`;




const Cart = ()=>{
    const cartDetails = useSelector(state => state.cart);
    const [total,setTotal]=useState(0);
    const childTotal=(total)=>{
        setTotal(total)
    };
    const [msg,setmsg] =useState(1);
    console.log("Value of msg is "+ msg);
    const choose_msg = (msg)=>{
        setmsg(msg);
    }
    const { cartItems } = cartDetails;
    const { id } = useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const { account, setAccount} = useContext(DataContext);
    const [open, setOpen] = useState(false);
    
    const openDialog = () => {
        setOpen(true);
    }
    
    useEffect(() => {  
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [msg,dispatch, cartItems, id]);

   
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
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
        cartItems.map(item =>(
            removeItemFromCart(item.id)
        ))
        navigate('/')
      
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
       
    <>
       { cartItems.length ? 
            <Component container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Header>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart} choose_msg={choose_msg}/>
                            ))
                        }
                    <BottomWrapper>
                        <StyledButton onClick={() => buyNow(total)} variant="contained">Place Order
                        </StyledButton>
                    </BottomWrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} childTotal={childTotal} msg={msg}/>
                </Grid>
                <LoginDialog open={open} setOpen={setOpen}/>
            </Component> : <EmptyCart />
        }
    </>
    )
}

export default Cart;