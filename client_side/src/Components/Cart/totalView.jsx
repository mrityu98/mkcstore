import { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: black;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
        
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const Discount = styled(Typography)`
    font-weigth: 500; 
    color: green;
`

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;


const TotalView = ({ cartItems,childTotal,msg })=>{

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems,msg]);
  
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price =price+ item.price.mrp*item.quantity
            discount =discount+ (item.price.mrp - item.price.cost)*item.quantity
           
        })
        setPrice(price);
        setDiscount(discount);
        childTotal(price-discount+40);
    }


        return (
            <Box style={{border: '2px solid #4d94ff'}}>  {/* className={classes.component}> */}
                <Header>
                    <Heading>PRICE DETAILS</Heading>
                </Header>
                <Container>
                    <Typography>Price ({cartItems?.length} item)
                        <Price component="span">₹{price}</Price>
                    </Typography>
                    <Typography>Discount
                        <Price component="span">-₹{discount}</Price>
                    </Typography>
                    <Typography>Delivery Charges
                        <Price component="span">₹40</Price>
                    </Typography>
                    <TotalAmount variant="h6">Total Amount
                        <Price>₹{price - discount + 40}</Price>
                    </TotalAmount>
                    <Discount>You will save ₹{discount - 40} on this order</Discount>
                </Container>
            </Box>
        )
    }

export default TotalView;