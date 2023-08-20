import { Box } from "@mui/material"

const styles ={
    li:{
       color:'#ffffff'
    }
}

const Footer = ()=>{
    return (
        <Box>
            <Box style={{display:'flex',justifyContent:'space-around',backgroundColor:' #009933'}}>
            <Box>
            <ul style={{listStyleType:'none'}}>
            <li style={{color:'#ffff33',marginBottom:12,fontSize:20}}>About</li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Contact Us</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">About mkc store</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Customer Servcie</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Careers</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Safety resource centre</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Investor relations</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Terms & Conditions</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Partner dispute</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">How we work</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Privacy & Cookie Statement</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Corporate contact</a></li>
        </ul>
            </Box>
            <Box>
            <ul style={{listStyleType:'none'}}>
            <li style={{color:'#ffff33',marginBottom:12,fontSize:20}}>Help</li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Payments</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Shipping</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Cancellation and returns</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}}id="listlink" href="#">FAQ</a></li>
        </ul>
            </Box>
            <Box>
            <ul style={{listStyleType:'none'}}>
            <li style={{color:'#ffff33',marginBottom:12,fontSize:20}}>Consumer Policy</li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}}id="listlink" href="#">Return policy</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Terms of use</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Security</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Privacy</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Sitemap</a></li>
            </ul>
            </Box>
            <Box>
            <ul style={{listStyleType:'none'}}>
            <li style={{color:'#ffff33',marginBottom:12,fontSize:20}}>Social</li>
            <li><a  style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Facebook</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Twitter</a></li>
            <li ><a style={{color:'#ffffff',textDecoration:'none'}} id="listlink" href="#">Youtube</a></li>
        </ul>
            </Box>
         </Box>
            <Box style={{height:24,display:'flex',justifyContent:'space-around',backgroundColor:' #009933',border:'1px solid #ffffff'}}>
              <span style={{color:'#ffff33'}}>Become a seller</span>
              <span style={{color:'#ffff33'}}>Advertise</span>
              <span style={{color:'#ffff33'}}>Gift Cards</span>
              <span style={{color:'#ffff33'}}>Help Center</span>
              <span style={{color:'#ffff33'}}>&copy;2019-2023 mkc store</span>
            </Box>
        </Box>
    )
}

export default Footer;