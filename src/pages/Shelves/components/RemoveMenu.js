import React from 'react';
import {Menu, MenuItem, IconButton, Typography} from "@material-ui/core";
import {MoreVert, Delete} from "@material-ui/icons";
import {deleteShelf} from "../../../store/actions/shelves";

const RemoveMenu = ({shelfId, dispatch}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (event) => {
        handleClose();
        dispatch(deleteShelf(shelfId));
    };

    const options = [
        {name: 'Delete', icon: Delete, handleClick: handleDelete}
    ];


    return (
        <div>
            <IconButton
                aria-haspopup="true"
                onClick={handleClick}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <MoreVert />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {options.map(({name, icon: Icon, handleClick}) => (
                    <MenuItem key={name}
                              onClick={handleClick}
                              onMouseDown={(e) => e.stopPropagation()}
                    >
                        <Typography component="span">
                            <Icon/>
                        </Typography>{name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default RemoveMenu;
