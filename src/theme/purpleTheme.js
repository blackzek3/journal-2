import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme ({
    palette: {
        primary: {
            main: '#084b5f'
        },
        secondary: {
            main: '#1a5a96'
        },
        error: {
            main: red.A400
        }
    }
})