import React from 'react';
import NavBar from "../components/NavBar";
import {Box, Container} from "@material-ui/core";

const PageLayout = ({children}) => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <NavBar/>
            <Box flexGrow="1">
                <Container>{children}</Container>
            </Box>
        </Box>
    );
};

export default PageLayout;
