import { Box, CircularProgress, Grid } from '@mui/material';


export const ChekingAuth = () => {
  return (
        <Box
          component="main"
          
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            bgcolor: "primary.main",
            
            // padding: 4,
          }}>
    
          <Box
            component="section"
            sx={{
             direction:'row',
             justifyContent:'center'
            }}>
  
            <CircularProgress color='warning'/>
          
              </Box>
            </Box>
  )
}
