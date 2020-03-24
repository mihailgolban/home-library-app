import React from 'react';
import {
    Box,
    Button,
    Menu,
    MenuItem,
    IconButton
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {connect} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import LinkButton from "../../../components/LinkButton";
import {addBookToShelf} from "../../../store/actions/shelves";


const messages = {
    success: (bookshelf) => <div>Book was successfully added to bookshelf <b>{bookshelf}</b>!</div>,
    error: (bookshelf) => <div>This book already exists in bookshelf <b>{bookshelf}.</b>You cannot add it twice.</div>,
    warning: "It seems you have no bookshelves. Please create new one."
};

const AddBookToShelf = ({bookId, shelves, books, dispatch, bookDetails}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [alert, setAlert] = React.useState({severity: "success",message: messages.success('')});
    const [open, setOpen] = React.useState(false);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        const shelvesKeys = Object.keys(shelves);
        // If no shelves
        if (shelvesKeys.length === 0) {
            setAlert({severity: "warning", message: messages.warning})
            setOpen(true);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShelfSelect = (shelfId, bookId) => {
        // If book is already on shelf

        let bookCategories = bookDetails[bookId].subjects || [];
        const shelfCategories = shelves[shelfId].categories || [];

        switch (true) {
            case books.find(book => book.bookId === bookId && book.shelfId === shelfId) !== undefined:
                setAlert({severity: "error", message: messages.error(shelves[shelfId].name || '')});
                break;
            case (shelfCategories.length !== 0 && !bookCategories.some(sub1 => shelfCategories.some(sub2 => sub1.name.includes(sub2)))):
                setAlert({severity: "error", message: 'Categories of the book do not match the categories of the bookshelf.'});
                break;
            default:
                dispatch(addBookToShelf(shelfId, bookId));
                setAlert({severity: "success", message: messages.success(shelves[shelfId].name || '')});
        }
        setOpen(true);
        handleClose();
    };

    const shelvesKeys = Object.keys(shelves);
    const ITEM_HEIGHT = 48;
    return (
        <div>
            <Button aria-controls="simple-menu" color="primary" aria-haspopup="true" onClick={handleClick}>
                Add book to shelf
            </Button>
            <Box display={open ? "box" : "none"}>
                <Alert severity={alert.severity}
                       action={
                           <div>
                               {alert.severity === 'warning' &&
                               <LinkButton to={'/shelves'} color="default" size="small">
                                   CREATE
                               </LinkButton>}
                               <IconButton size="small"
                                           onClick={() => setOpen(false)}
                               >
                                   <CloseIcon/>
                               </IconButton>
                           </div>
                       }
                >
                    {alert.message}
                </Alert>
            </Box>

            {shelvesKeys.length !== 0 &&
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {shelvesKeys.map(shelfId => {
                    return (
                        <MenuItem key={shelfId} onClick={() => handleShelfSelect(shelfId, bookId)}>{shelves[shelfId].name}</MenuItem>
                    );
                })}
            </Menu>}
        </div>
    );
};

function mapStateToProps({shelvesReducer, booksReducer}) {
    return {
        shelves: shelvesReducer.shelves,
        books: shelvesReducer.books,
        bookDetails: booksReducer.bookDetails
    }
}

export default connect(mapStateToProps)(AddBookToShelf);
