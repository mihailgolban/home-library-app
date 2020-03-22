import React from 'react';
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import DarkModeToggle from "./DarkModeToggle";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {DARK_THEME} from "../../store/actions/theme";
import NavBarMenu from "./NavBarMenu";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
}));

const NavBar = () => {
    const {palette:{type, primary}} = useTheme();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: type === DARK_THEME ? '#202B33' : primary.main}}>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Link to="/" className={classes.link}>
                            <Typography variant="h6">Book library</Typography>
                        </Link>
                    </Box>
                    <NavBarMenu/>
                    <DarkModeToggle/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
