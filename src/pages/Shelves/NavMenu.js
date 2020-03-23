import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveMenu from "./components/RemoveMenu";
import {connect} from "react-redux";
import AddNewShelfDialog from "./components/AddNewShelfDialog";

import {
    ListItem,
    List,
    ListItemText,
    ListSubheader,
    Fab,
    Box
} from "@material-ui/core";
import {addNewShelf} from "../../store/actions/shelves";

const useStyles = makeStyles(theme => ({
   root: {
       width: "100%",
       maxWidth: 360,
       backgroundColor: theme.palette.background.paper
   }
}));

const NavMenu = ({shelves, dispatch}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav"
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                         Shelves
                      </ListSubheader>
                  }
            >
                {Object.keys(shelves).map(shelfId => {
                    const {name} = shelves[shelfId];
                    return (
                        <ListItem key={shelfId} button>
                            {name && <ListItemText primary={name} />}
                            <RemoveMenu shelfId={shelfId} dispatch={dispatch}/>
                        </ListItem>
                    )
                })}
            </List>
            <Box textAlign={"center"} p={2}>
                <Fab
                    variant="extended"
                    color="primary"
                    aria-label="add"
                    onClick={() => setOpen(true)}
                >
                    <AddIcon />
                    New shelf
                </Fab>
            </Box>
            <AddNewShelfDialog
                shelves={shelves}
                open={open}
                handleClose={() => setOpen(false)}
                handleSubmit={(name, categories) => {
                    dispatch(addNewShelf(name, categories));
                    setOpen(false);
                }}
            />
        </div>
    );
};

function mapStateToProps({shelvesReducer}) {
    return {
        shelves: shelvesReducer.shelves
    }
}

export default connect(mapStateToProps)(NavMenu);
