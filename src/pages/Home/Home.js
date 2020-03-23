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
                    const {key, ...rest} = book;
                    return (
                        <Book key={key} timeout={(i % 5) * 500} {...rest}/>
                    )
                })}
            </Box>
        </Box>
    );
};


export default Home;
