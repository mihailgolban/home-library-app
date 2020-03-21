import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {IconButton} from "@material-ui/core";
import {connect} from 'react-redux';
import {changeTheme, DARK_THEME, LIGHT_THEME} from "../../store/actions/theme";


const DarkModeToggle = ({theme, dispatch}) => {
        if (theme === DARK_THEME) {
            return (
                <IconButton edge="end"
                            onClick={() => dispatch(changeTheme(LIGHT_THEME))}
                >
                    <Brightness7Icon/>
                </IconButton>
            )

        } else {
            return (
                <IconButton edge="end"
                            onClick={() => dispatch(changeTheme(DARK_THEME))}
                >
                    <Brightness4Icon/>
                </IconButton>
            )
        }
};

function mapStateToProps({appTheme}) {
    return {
        theme: appTheme.theme
    }
}

export default connect(mapStateToProps)(DarkModeToggle);
