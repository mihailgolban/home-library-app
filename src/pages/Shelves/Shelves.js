import React from 'react';
import NavMenu from "./NavMenu";
import {Box, Grid, Button, Typography} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import Book from "../../components/Book";
import Review from "../../components/Review";
import {makeStyles} from "@material-ui/core/styles";
import BookshelfCategories from "./components/BookshelfCategories";

const useStyles = makeStyles({
    navMenu: {
        flexGrow: 1
    }
});

const Shelves = ({books, reviews, handleShelfReview, showReview, shelfCategories}) => {
    const classes = useStyles();
    return (
        <Box mt={3}>
            <PageTitle>My library</PageTitle>
            <Box mt={3}>
            <Grid container spacing={2}>
                <Grid item md={3} className={classes.navMenu}>
                    <NavMenu/>
                    <Box mt={2}>
                        <BookshelfCategories categories={shelfCategories}/>
                    </Box>
                </Grid>
                <Grid item md={9}>
                    {!showReview &&
                    <Box textAlign="center">
                        <Box p={5}>
                            <Typography variant="h5" component="h5" color="textSecondary">No Books</Typography>
                            <Typography variant="body1" component="p" color="textSecondary">You have no books in your library</Typography>
                        </Box>
                    </Box>}
                    <Box display="flex" flexWrap="wrap">
                        {books.map((book, i) => {
                            const {bookId, bookDetails: {title, cover}} = book;
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
                    {showReview && <Review
                        title={'Shelf reviews'}
                        reviews={reviews}
                        handleSubmitReview={handleShelfReview}
                    />}
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
};

export default Shelves;
