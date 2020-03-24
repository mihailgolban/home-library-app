import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root : {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
});

const Progress = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    );
};

export default Progress;
