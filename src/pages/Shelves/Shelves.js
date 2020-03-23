import React from 'react';
import NavMenu from "./NavMenu";
import {Box, Grid} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import Book from "../../components/Book";
import {connect} from "react-redux";


const Shelves = ({selectedShelfId, shelves, books}) => {
    const shelfBooks = books.filter(book => {
        console.log(book);
        return book.shelfId === selectedShelfId;
    });
    return (
        <Box mt={3}>
            <PageTitle>My library</PageTitle>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <NavMenu/>
                </Grid>
                <Grid item xs={9}>
                    <Box display="flex" flexWrap="wrap">
                        {shelfBooks.map((book, i) => {
                            const {bookId, title, cover} = book.bookDetails;
                            return (
                                <Book key={i}
                                      bookId={bookId}
                                      title={title || ''}
                                      coverUrl={cover['medium'] || null}
                                      timeout={(i % 5) * 500}
                                />
                            )
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

function mapStateToProps({shelvesReducer}) {
    return {
        shelves: shelvesReducer.shelves,
        selectedShelfId: shelvesReducer.selectedShelfId,
        books: shelvesReducer.books
    }
}

export default connect(mapStateToProps)(Shelves);
