import React from 'react';
import Book from "../../components/Book";
import Box from "@material-ui/core/Box";
import PageTitle from "../../components/PageTitle";

const Home = ({books}) => {
    return (
        <Box mt={3}>
            <PageTitle>Books</PageTitle>
            <Box display="flex" flexWrap="wrap">
                {books && books.map((book, i) => {
                    const {key, cover_id, cover_edition_key, ...rest} = book;
                    return (
                        <Book key={key}
                              bookId={cover_edition_key || ''}
                              timeout={(i % 5) * 500}
                              coverUrl={cover_id ? `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`: null}
                              {...rest}
                        />
                    )
                })}
            </Box>
        </Box>
    );
};


export default Home;
