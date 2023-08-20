import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 20px; 
  margin-left: 160px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
  padding: 5px;
  display: flex;
  color: #009933;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
  width:37%;
`;

const Search = () => {

  const [ text, setText ] = useState('');
  



const { products } = useSelector(state => state.getProducts);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProducts())
}, [dispatch])

const getText = (text) => {
  setText(text);
}

    return (
        <SearchContainer>
            <InputSearchBase
    placeholder="Search for products, brands and more"
    onChange={(e) => getText(e.target.value)}
    value={text}
    />
        <SearchIconWrapper>
              <SearchIcon />
        </SearchIconWrapper>
        {
              text && 
              <ListWrapper>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        onClick={() => setText('')} 
                        style={{ textDecoration:'none', color:'inherit'}}
                      >
                        {product.title.longTitle}
                        </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>

)
}

export default Search;