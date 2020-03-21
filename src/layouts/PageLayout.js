import React from 'react';
import NavBar from "../components/NavBar";
import {Container} from "@material-ui/core";

const PageLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            <Container>{children}</Container>
        </div>
    );
};

export default PageLayout;
