import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
   link: {
       color: "inherit",
       textDecoration: "none"
   }
});

const LinkButton = ({to, children, ...rest}) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classes.link}>
            <Button {...rest}>
                {children}
            </Button>
        </Link>
    );
};

export default LinkButton;
