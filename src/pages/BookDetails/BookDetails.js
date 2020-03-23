import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router-dom";
import NoMatch from "../NoMatch";
import BookDetailsContainer from "./BookDetailsContainer";
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';

import {
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Box,
    List,
    ListItem,
    Button,
    Grow
} from "@material-ui/core";


const useStyles = makeStyles({
   image: {
       objectFit: "contain",
       height: "auto",
       maxWidth: "280px",
       maxHeight: "450px"
   }
});


const BookDetails = () => {
    const location = useLocation();
    const [value, setValue] = React.useState(2);
    const params = new URLSearchParams(location.search);
    const classes = useStyles();
    const bookId = params.get('id');

    if (bookId) {
        return (
            <BookDetailsContainer bookId={bookId}>
                {
                    (bookDetails) => {
                        const {
                            title,
                            publishers = [],
                            number_of_pages = '',
                            cover:{large},
                            authors = [],
                            publish_date,
                            publish_places = [],
                            subjects = [],
                            subject_people = [],
                        } = bookDetails;
                        return (
                            <Box mt={3}>
                                <Grid container spacing={2}>
                                    <Grid item sm={3}>
                                        <Grow in={true} addEndListener={null} timeout={1000}>
                                            <CardMedia component="img"
                                                       image={large}
                                                       className={classes.image}
                                                       title={title}
                                            />
                                        </Grow>
                                    </Grid>
                                    <Grid item sm={9}>
                                        <Box mb={2}>
                                            <Typography variant="h4" component="h4">{title}</Typography>
                                            <Typography color={"textSecondary"}>
                                                by {authors.map((author, i) => {
                                                return `${i ? ', ' : ''}${author.name} `;
                                            })}
                                            </Typography>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </Box>
                                        <Card>
                                            <CardContent>
                                                <List>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Published:</Typography>
                                                        <Typography>
                                                            {publish_date}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Publishers:</Typography>
                                                        <Typography>
                                                            {publishers.map((publisher, i) => {
                                                                return `${i ? ', ' : ''}${publisher.name || ''}`;
                                                            })}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Categories:</Typography>
                                                        <Typography>
                                                            {subjects.map((subject, i) => {
                                                                return `${i ? ', ' : ''}${subject.name || ''}`;
                                                            })}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>People:</Typography>
                                                        <Typography>
                                                            {subject_people.map((person, i) => {
                                                                return `${i ? ', ' : ''}${person.name || ''}`;
                                                            })}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Places:</Typography>
                                                        <Typography>
                                                            {publish_places.map((place, i) => {
                                                                return `${i ? ', ' : ''}${place.name || ''}`;
                                                            })}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Number of pages:</Typography>
                                                        <Typography>
                                                            {number_of_pages || 'No data'}
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </CardContent>
                                            <CardActions>
                                                <Box px={2}>
                                                    <Button color="primary">
                                                        Add book to shelf
                                                    </Button>
                                                    <Button color="primary">
                                                        Write a review
                                                    </Button>
                                                </Box>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    }
                }
            </BookDetailsContainer>
        );
    } else {
        return <NoMatch/>
    }
};


export default BookDetails;
