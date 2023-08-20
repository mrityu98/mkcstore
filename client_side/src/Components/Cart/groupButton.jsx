import { ButtonGroup, Button, styled } from "@mui/material";
import { useState } from "react";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupButton = ({item,choose_msg}) => {

    const [ curr_quantity, setCounter ] = useState(item.quantity);


    const handleIncrement = () => {
        setCounter(curr_quantity => curr_quantity+1);
        item.quantity=curr_quantity+1;
        choose_msg(item.quantity);
        
    };

    const handleDecrement = () => {
        setCounter(curr_quantity => curr_quantity-1);
        item.quantity=curr_quantity-1;
        choose_msg(item.quantity);
      
    };


return (
    <Component>
        <StyledButton onClick={() => handleDecrement()} disabled={item.quantity === 1}>-</StyledButton>
        <Button disabled>{item.quantity}</Button>
        <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
    </Component>
);

}
export default GroupButton;
