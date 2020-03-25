import React from 'react';
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";
import DarkModeToggle from "./DarkModeToggle";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {DARK_THEME} from "../../store/actions/theme";
import NavBarMenu from "./NavBarMenu";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {restoreInitialBooks} from "../../store/actions/books";

const useStyles = makeStyles(theme => ({
    link: {
        color: "white",
        textDecoration: "none"
    }
}));

const NavBar = ({dispatch}) => {
    const {palette:{type, primary}} = useTheme();
    const classes = useStyles();
    return (
        <AppBar position="static" style={{backgroundColor: type === DARK_THEME ? '#202B33' : primary.main}}>
            <Toolbar>
                <Box flexGrow={1}>
                    <Link to="/" className={classes.link} onClick={() => dispatch(restoreInitialBooks())}>
                        <Typography variant="h6">Book library</Typography>
                    </Link>
                </Box>
                <NavBarMenu/>
                <DarkModeToggle/>
            </Toolbar>
        </AppBar>
    );
};

export default connect()(NavBar);
