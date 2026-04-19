import { StarOutline } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"

export const NothingSelecterView = () => {
  return (
    <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 110px)",
            bgcolor: "primary.main",
            borderRadius: 5
            // padding: 4,
          }}>
            <Box xs={ 12 }>
                <StarOutline sx={{ fontSize: 100, color: 'white' }}/>
            </Box>
        
            <Box xs={ 12 }>
                <Typography color="white" variant="h5" > Selecciona o crea una entrada </Typography>
            </Box>
    </Box>
  )
}
