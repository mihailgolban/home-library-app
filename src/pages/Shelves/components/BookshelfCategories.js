import React from 'react';
import {Card, CardHeader, CardContent} from "@material-ui/core";

const BookshelfCategories = ({categories}) => {
    return (
        <Card>
            <CardHeader title="Bookshelf categories"/>
            <CardContent>
                {categories.length === 0 &&
                <div>No categories</div>}
                {categories.map((category, i) => {
                    return `${i ? ', ' : ''}${category}`;
                })}
            </CardContent>
        </Card>
    );
};

export default BookshelfCategories;
