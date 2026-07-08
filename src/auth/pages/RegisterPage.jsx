import { useMemo, useState } from "react";
import { Box, Typography, TextField, Grid, Button, Link, Alert, } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";


const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe llevar @.' ],
  password: [ (value) => value.length >=6, 'El password debe de tener mas de 6 letras.' ],
  displayName: [ (value) => value.length >=1, 'El nombre es obligatorio.' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

   const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

   const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    
     if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState) );
   }



  return (

    <AuthLayout title="Registrate">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster' >
          
          <Grid xs={ 12 } sx={{ mt: 2}} >

            <TextField
              id="Nombre"
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              size="small"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />

          </Grid>

          <Grid xs={ 12 } sx={{ mt: 2}} >

            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="email@google.com"
              size="small"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />

          </Grid>

          <Grid xs={ 12 } sx={{ mt: 2}} >

            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="password"
              size="small"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />

          </Grid>
          
          <Grid container spacing={2} sx={{ mt: 2 }}>

          <Grid xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>

          <Grid size={{ xs: 12, md: 15 }}>
            <Button 
            type="submit" 
            variant="contained" 
            disabled={ isCheckingAuthentication } 
            fullWidth>
              Crear cuenta
            </Button>
          </Grid>
      
          <Grid size={{ xs: 12, md: 6 }}>

          </Grid>

        </Grid>

        <Grid
          container
          // direction="row"
          justifyContent="end"
          sx={{ mt: 2 }}>
          <Typography sx={{ mr: 1 }}> ¿Ya tienes una cuenta? </Typography>  
          <Link
            component={RouterLink}
            color="inherit"
            to="/auth/login">
            Ingresar
          </Link>

        </Grid>
        
        </form>





        
    </AuthLayout>
        
        


  );

};

