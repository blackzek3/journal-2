import { SaveOutlined } from "@mui/icons-material"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    sx={{ mb: 1 }}
    >
        <Grid>
            <Typography
            fontSize={ 39 }
            fontWeight='ligth'>
                15 de junio, 2006
            </Typography>
        </Grid>
       <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <Button variant="contained" color="primary">
                Guardar
             </Button>
        </Box>
        <Grid>
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label='Titulo'
            sx={{ border: 'none', mb: 1 }}/>
            
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio en el dia de hoy?"
            minRows={ 5 }/>
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
