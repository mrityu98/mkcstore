import { AppBar, Toolbar, Box, styled,Typography,IconButton,Drawer, Icon,List,ListItem } from '@mui/material';
import Search from './search';
import { Menu } from '@mui/icons-material';
import CustomButtons from './custom_buttons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #FFA500;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
`;

const Image = styled('img')({
    width: 80,
    height: 45,
    marginLeft: -60
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 2%',
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
    }))

    const MenuButton = styled(IconButton)(({ theme }) => ({
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }));


const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

return (
    <StyledHeader position="fixed">
            <Toolbar style={{minHeight:55}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                <Menu />
                </MenuButton>
                
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/'>
                    <Image src='https://i.ibb.co/56Lc2tT/mkc-store-2-1.png' alt="store"/>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                <CustomButtons/>
                </CustomButtonWrapper>
               
            </Toolbar>
        </StyledHeader>
)
}


export default Header;