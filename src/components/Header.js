import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate} from "react-router-dom";
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
}))

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { currency, setCurrency } = CryptoState()
    console.log(currency);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            }, 
            type: "dark",
        }
    })
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='transparent' position='static'>
                    <Container>
                        <Toolbar>
                            <Typography 
                                onClick={() => {navigate("/")}} 
                                className={classes.title}
                                variant='h5'
                            >
                                Crypto Hunter
                            </Typography>
                            <Select 
                                variant="outlined" 
                                style={{
                                    widht:100,
                                    height: 40,
                                    marginRight: 15,
                                }}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                                >
                                <MenuItem value={"USD"}>USD</MenuItem>
                                <MenuItem value={"EUR"}>EUR</MenuItem>
                            </Select>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default Header