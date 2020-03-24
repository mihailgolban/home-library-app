import React from 'react';
import {Typography, Box} from "@material-ui/core";
import LinkButton from "../components/LinkButton";

const NoMatch = () => {
    return (
        <Box m={5} textAlign="center">
            <Typography variant="h1" component="h1">404</Typography>
            <Typography variant="h5" component="h5">OOPS, SORRY WE CAN'T FIND THIS PAGE</Typography>
            <Box mt={3}>
                <LinkButton to={'/'} variant="contained" color="primary">
                    Go Home
                </LinkButton>
            </Box>
        </Box>
    );
};

export default NoMatch;
