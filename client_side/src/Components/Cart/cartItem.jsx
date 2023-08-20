import { Card, Box, Typography, Button, styled } from '@mui/material';
import GroupButton from './groupButton';
import {addEllipsis} from '../../utils/commonUtils'
import { removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const Component = styled(Card)`
border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
    border: 2px solid #4d94ff;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;

const Discount = styled(Typography)`
    color: #388E3C;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ item,choose_msg}) => {
    
  const dispatch = useDispatch();

    const removeItemFromCart = (id)=>{
        dispatch(removeFromCart(id));
    }


    return (
        <Component>
            <LeftComponent>
                <img src={item.url} style={{ height: 110, width: 110 }} />
                <GroupButton item={item} choose_msg={choose_msg}/>
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike style={{color:'red'}}><span style={{color:'black'}}>₹{item.price.mrp}</span></strike></MRP>&nbsp;&nbsp;&nbsp;
                    <Discount component="span">{item.price.discount} off</Discount>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;