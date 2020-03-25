import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    Grid,
    Divider
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import WriteReview from "./components/WriteReview";

const Review = ({title, reviews, handleSubmitReview}) => {
    const [openReview, setOpenReview] = useState(false);
    return (
        <Card>
            <Box px={2}>
                <CardHeader title={title}/>
                <CardContent>
                    {reviews && reviews.length === 0 &&
                    <Typography variant='body1'
                                component='p'
                                color="textSecondary">
                        There are no reviews yet.
                    </Typography>
                    }
                    {reviews.map((review, i) => {
                        const {review: {name, date, rating, message}} = review;
                        return (
                            <div key={i}>
                                <Box mb={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="body1" component="h6">{name}</Typography>
                                            <Typography variant="caption" component="p" color="textSecondary">
                                                {date}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box textAlign="right">
                                                <Rating
                                                    name="rating"
                                                    value={+rating}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {message}
                                </Typography>
                                <Box my={3}><Divider/></Box>
                            </div>
                        )
                    })}
                </CardContent>
                <CardActions>
                    <Box dislay="flex" flexDirection="column" width="100%">
                        <Button color="primary" onClick={() => setOpenReview(!openReview)}>
                            Write a review
                        </Button>
                        <WriteReview open={openReview} handleSubmitReview={handleSubmitReview}/>
                    </Box>
                </CardActions>

            </Box>
        </Card>
    );
};

export default Review;
