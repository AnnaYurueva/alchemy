import { createTheme } from '@mui/material/styles';
import myComponents from "./components";
import myPalette from "./pallete";

export const theme = createTheme({
    palette: myPalette,
    // @ts-ignore
    components: myComponents,
});
