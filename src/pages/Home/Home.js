import React from 'react';
import {connect} from 'react-redux';
import Book from "../../components/Book";
import Box from "@material-ui/core/Box";

const Home = ({theme, dispatch, books}) => {
    return (
            <Box display="flex" flexWrap="wrap">
                {books && books.map(book => {
                    const {key, ...rest} = book;
                    return (
                        <Book key={key} {...rest}/>
                    )
                })}
            </Box>
    );
};

function matchStateToProps({appTheme}) {
    return {
        theme: appTheme.theme
    }
}

export default connect(matchStateToProps)(Home);
