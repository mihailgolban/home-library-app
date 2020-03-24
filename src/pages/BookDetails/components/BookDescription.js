import React from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableRow,
    Box,
    CardHeader,
    CardContent, CardActions, Card
} from "@material-ui/core";
import AddBookToShelf from "./AddBookToShelf";


const BookDescription = ({bookDetails, bookId}) => {
    const {
        publishers = [],
        number_of_pages = '',
        publish_date = '',
        publish_places = [],
        subjects = [],
        subject_people = [],
    } = bookDetails;
    const rows = [
        {name: 'Published', value: publish_date},
        {name: 'Publishers', value: publishers.map((publisher, i) => `${i ? ', ' : ''}${publisher.name || ''}`)},
        {name: 'Categories', value: subjects.map((subject, i) => `${i ? ', ' : ''}${subject.name || ''}`)},
        {name: 'People', value: subject_people.map((person, i) => `${i ? ', ' : ''}${person.name || ''}`)},
        {name: 'Places', value: publish_places.map((place, i) => `${i ? ', ' : ''}${place.name || ''}`)},
        {name: 'Number of pages', value: number_of_pages || 'No data'}

    ];
    return (
        <Card>
            <Box px={2}>
                <CardHeader title="Book description"/>
                <CardContent>
                    <TableContainer>
                        <Table size="small">
                            <TableBody>
                                {rows.map(row => row.value.length ?
                                        <TableRow key={row.name}>
                                            <TableCell>{row.name}:</TableCell>
                                            <TableCell>{row.value}</TableCell>
                                        </TableRow> : null)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
                <CardActions>
                    <AddBookToShelf bookId={bookId}/>
                </CardActions>
            </Box>
        </Card>
    );
};

export default BookDescription;
