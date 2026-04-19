// import { LoginOutlined, LogoutOutlined, MenuOutlined } from "@mui/icons-material"
// import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

// export const Navbar = ({ drawerWidth = 240 }) => {
//   return (
//     <AppBar
//     position="fixed"
//     sx={{  
//         width: { sm: `calc(100% - ${ drawerWidth }px)` },
//         ml: { sm: `${ drawerWidth }px` }
//     }}
//     >
//         <Toolbar>
//             <IconButton
//             color="inherit"
//             edge="start"
//             sx={{ mr: 2, display: { sm: 'none' } }}
//             >
//                 <MenuOutlined/>
//             </IconButton>

//             <Grid 
//             container 
//             direction="row"
//             justifyContent="space-between">
//                 <Typography variant="h6" noWrap component="div"> JournalApp </Typography>
                
//                 <IconButton color="error">
//                     <LogoutOutlined/>
//                 </IconButton>
//             </Grid>
//         </Toolbar>
//     </AppBar>
//   )
// }

import {

  LogoutOutlined,

  MenuOutlined,

} from "@mui/icons-material";

import {

  AppBar,

  Toolbar,

  IconButton,

  Grid,

  Typography,

  Drawer,

} from "@mui/material";

import { useState } from "react";



export const Navbar = ({ drawerWidth = 240 }) => {

  const [open, setOpen] = useState(false);



  return (

    <>

      <AppBar

        // position="static"

        sx={{

          width: { sm: `calc(100% - ${drawerWidth}px)` },

          ml: { sm: `${drawerWidth}px` },

        }}

      >

        <Toolbar>

          <IconButton

            aria-label=""

            onClick={() => setOpen(true)}

            color="inherit"

            edge="start"

            sx={{

              display: { xs: "flex", sm: "none" },

              mr: 2,

            }}

          >

            <MenuOutlined />

          </IconButton>



          <Typography

            variant="h6"

            // noWrap

            component="span"

            sx={{ flexGrow: 1 }}

          >

            JournalApp

          </Typography>



          <IconButton aria-label="" color="error">

            <LogoutOutlined />

          </IconButton>

        </Toolbar>

      </AppBar>



      <Drawer

        anchor="left"

        open={open}

        onClose={() => setOpen(false)}

        sx={{ display: { xs: "flex", sm: "none" } }}

      >

        <Typography variant="h6" color="initial">

          Lolcat

        </Typography>

      </Drawer>

    </>

  );

};
