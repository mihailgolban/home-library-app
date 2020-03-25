import React from 'react';
import Book from "../../components/Book";
import Box from "@material-ui/core/Box";
import PageTitle from "../../components/PageTitle";
import SearchBar from "./components/SearchBar";
import NoImage from "../../assets/images/No_picture_available.png"

const Home = ({books, isLoading}) => {
    return (
        <Box mt={3}>
            <PageTitle>Books</PageTitle>
            <Box my={3}>
                <SearchBar/>
            </Box>
            <Box display="flex" flexWrap="wrap">
                {!isLoading && books.length === 0 &&
                    <Box textAlign="center" width="100%">
                        <p>No matches. Please try to search other books.</p>
                    </Box>
                }
                {books && books.map((book, i) => {
                    const {key, cover_id=null, cover_i=null, cover_edition_key, ...rest} = book;
                    const coverId = cover_id ?? cover_i ?? null;
                    const coverUrl = coverId ? `http://covers.openlibrary.org/b/id/${coverId}-M.jpg` : NoImage;
                    return (
                        <Book key={key}
                              bookId={cover_edition_key || ''}
                              timeout={(i % 5) * 500}
                              coverUrl={coverUrl}
                              {...rest}
                        />
                    )
                })}
            </Box>
        </Box>
    );
};


export default Home;
