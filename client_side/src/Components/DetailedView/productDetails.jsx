
import { Typography,Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`; 

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;

const ProductDetails = ({product})=>{
    const date = new Date(new Date().getTime()+(4*24*60*60*1000));

    return (
<>
            < Typography style={{fontSize:20}}>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: '#002b80', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                    </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{color: '#002b80'}}>Available offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Credit Cards</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this {product.title.shortTitle} and Get Extra ₹500 Off on Selected {product.title.shortTitle}</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next {product.title.shortTitle} purchase</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#002b80' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#002b80'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#002b80' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
</>
)
}

export default ProductDetails;