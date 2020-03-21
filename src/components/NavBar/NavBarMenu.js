import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
   a: {
       textDecoration: "none"
   },
    text: {
       color: "white"
    }
});

const NavBarMenu = () => {
    const classes = useStyle();
    return (
        <div>
            <Link to="/home" className={classes.a}>
                <Button className={classes.text}>
                    Books
                </Button>
            </Link>
            <Link to="/shelves" className={classes.a}>
                <Button className={classes.text}>
                    Shelves
                </Button>
            </Link>
        </div>
    );
};

export default NavBarMenu;
