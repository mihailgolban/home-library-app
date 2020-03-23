import React from 'react';
import NavMenu from "./NavMenu";
import {Box} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import Book from "../../components/Book";
import {connect} from "react-redux";


const Shelves = ({shelves}) => {
    return (
        <Box mt={3}>
            <PageTitle>My library</PageTitle>
            <NavMenu/>
            {/*<Box display="flex" flexWrap="wrap">*/}
            {/*    {books && books.map((book, i) => {*/}
            {/*        const {key, ...rest} = book;*/}
            {/*        return (*/}
            {/*            <Book key={key} timeout={(i % 5) * 500} {...rest}/>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Box>*/}
        </Box>
    );
};

function mapStateToProps({shelvesReducer}) {
    return {
        shelves: shelvesReducer.shelves
    }
}

export default connect(mapStateToProps)(Shelves);
