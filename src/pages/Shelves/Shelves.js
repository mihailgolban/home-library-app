import React from 'react';
import NavMenu from "./NavMenu";
import {Box} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";

const Shelves = () => {
    return (
        <Box mt={3}>
            <PageTitle>My library</PageTitle>
            <NavMenu/>
        </Box>
    );
};

export default Shelves;
