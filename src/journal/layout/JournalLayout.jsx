// import { Box } from "@mui/material";
// import { Navbar, Sidebar } from "../components";

// const drawerWidth = 240;

// export const JournalLayout = ({ children }) => {
//   return (
//     <Box sx={{ display: "flex" }}>

//         <Navbar drawerWidth={ drawerWidth }/>

//         <Sidebar drawerWidth={ drawerWidth }/>

//         <Box 
//         component='main'
//         sx={{ flexGrow: 1, p: 3 }}>
//             {/* Toolbar */}
//             { children }
//         </Box>
//     </Box>
//   )
// }

// import {NavBar, SideBar} from "./components";
import {Grid, Toolbar} from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Grid sx={{
            display: "flex"
        }}>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />
            <Grid component="main"
                 sx={{
                     flexGrow: 1,
                     p: 3
                 }}>
                <Toolbar />
                {children}
            </Grid>
        </Grid>
    )
}