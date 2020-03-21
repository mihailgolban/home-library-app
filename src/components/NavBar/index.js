import React from 'react';
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import DarkModeToggle from "./DarkModeToggle";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {DARK_THEME} from "../../store/actions/theme";
import NavBarMenu from "./NavBarMenu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

const NavBar = () => {
    const {palette:{type, primary}} = useTheme();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: type === DARK_THEME ? primary.dark : primary.main}}>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Typography variant="h6">Book library</Typography>
                    </Box>
                    <NavBarMenu/>
                    <DarkModeToggle/>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
