import React from 'react';
import {useLocation} from "react-router-dom";
import NoMatch from "../NoMatch";
import BookDetailsContainer from "./BookDetailsContainer";
import Grid from "@material-ui/core/Grid";
import Rating from '@material-ui/lab/Rating';
import Review from "../../components/Review";
import BookDescription from "./components/BookDescription";

import {
    Typography,
    Box,
    Grow
} from "@material-ui/core";
import Image from 'material-ui-image'



const BookDetails = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bookId = params.get('id');

    if (bookId) {
        return (
            <BookDetailsContainer bookId={bookId}>
                {
                    ({bookDetails, reviews, handleSubmitReview, rating}) => {
                        const {
                            title = '',
                            cover:{large},
                            authors = [],
                        } = bookDetails;

                        return (
                            <Box mt={3}>
                                <Grid container spacing={2}>
                                    <Grid item sm={3}>
                                        <Grow in={true} addEndListener={null} timeout={1000}>
                                            <Image src={large}
                                                   imageStyle={{height: "auto", width: "270px", objectFit: "contain"}}
                                                   disableSpinner={false}
                                                   style={{minHeight: "400px", width: "270px"}}
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
                                                name="rating"
                                                value={+rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Box>
                                        <BookDescription bookId={bookId} bookDetails={bookDetails}/>
                                        <Box mt={3}>
                                            <Review
                                                title={'Book reviews'}
                                                reviews={reviews}
                                                handleSubmitReview={handleSubmitReview}
                                            />
                                        </Box>
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
