import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:'purple'}}>
          <Toolbar>
          <MenuIcon style={{color:'white'}}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos - Dialog Para Confirmações
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;