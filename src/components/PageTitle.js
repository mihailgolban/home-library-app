import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    h2: {
        textAlign: "center"
    }
}));

const PageTitle = ({children}) => {
    const classes = useStyles();
    return (
        <div>
            <Typography component="h3"
                        variant="h3"
                        className={classes.h2}
            >
                <b>{children}</b>
            </Typography>
        </div>
    );
};

export default PageTitle;
