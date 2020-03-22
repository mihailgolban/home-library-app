import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router-dom";
import NoMatch from "../NoMatch";
import BookDetailsContainer from "./BookDetailsContainer";
import Grid from "@material-ui/core/Grid";
import {
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Box,
    List,
    ListItem,
    Button
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
    const params = new URLSearchParams(location.search);
    const classes = useStyles();
    const bookId = params.get('id');

    console.log('bookId=', bookId, ' ', bookId ? 'da': 'nu');
    if (bookId) {
        return (
            <BookDetailsContainer bookId={bookId}>
                {
                    (bookDetails) => {
                        const {title, number_of_pages, cover:{large}, authors, publish_date} = bookDetails;
                        return (
                            <Box mt={3}>
                                <Grid container spacing={2}>
                                    <Grid item sm={3}>
                                        <CardMedia component="img"
                                                   image={large}
                                                   className={classes.image}
                                                   title={title}
                                        />
                                    </Grid>
                                    <Grid item sm={9}>
                                        <Box mb={2}>
                                            <Typography variant="h4" component="h4">{title}</Typography>
                                        </Box>
                                        <Card>
                                            <CardContent>
                                                <List>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Authors:</Typography>
                                                        <Typography>
                                                            {authors.map(author => {
                                                                return `${author.name} `;
                                                            })}
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem>
                                                        <Typography color={"textSecondary"}>Publish date:</Typography>
                                                        <Typography>
                                                            {publish_date}
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
                                                <Button size="small" color="primary">
                                                    Add book to shelf
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Write a review
                                                </Button>
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
