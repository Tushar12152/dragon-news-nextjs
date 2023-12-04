import { Box } from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box className='bg-black px-2 py-10'>
             <Container>
            
             <Box  sx={{'& svg':{
                   color:'white'
               } }} className="w-full text-center">
              
               <IconButton>
                  <FacebookIcon/>
                </IconButton>
                <IconButton>
                  <TwitterIcon/>
                </IconButton>
                <IconButton>
                  <YouTubeIcon/>
                </IconButton>
                <IconButton>
                  <LinkedInIcon/>
                </IconButton>
                <IconButton>
                  <InstagramIcon/>
                </IconButton>
               
            </Box>


             </Container>
        </Box>
    );
};

export default Footer;