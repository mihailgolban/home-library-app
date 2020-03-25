import React, {useState} from 'react';
import {Box, TextField, Button, Card, CardHeader, CardContent, CardActions} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const WriteReview = ({open, handleSubmitReview}) => {
    const [formValues, setFormValues] = useState({name: '', message: '', rating: 0});
    const [errors, setErrors] = useState({name: '', message: ''});

    const handleSubmit = () => {
        const {name, message} = formValues;
        setErrors({
            name: name.length === 0 ? 'Please enter your name.' : '',
            message: message.length === 0 ? 'Please enter a message.' : ''
        });

        if (errors.name.length === 0 && errors.message.length === 0) {
            handleSubmitReview({
                rating: formValues.rating,
                name: formValues.name,
                message: formValues.message
            });
            setFormValues({name: '', message: '', rating: ''});
        }
    };

    if (!open) {
        return null;
    } else return (
        <Card>
            <CardHeader title="Your review"/>
            <CardContent>
                <Box mb={2}>
                    <Rating name="bookRating"
                            value={formValues.rating}
                            precision={0.5}
                            size="large"
                            defaultValue={0}
                            onChange={(event, newValue) => {
                                setFormValues({...formValues, rating: newValue})
                            }}
                    />
                </Box>
                <TextField name="name"
                           value={formValues.name}
                           label="Name"
                           fullWidth={true}
                           variant="outlined"
                           onChange={e => setFormValues({...formValues, name: e.target.value})}
                           error={errors.name.length !== 0}
                           helperText={errors.name}
                           autoComplete={"off"}
                />
                <Box mt={2}>
                    <TextField
                        name="message"
                        value={formValues.message}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="5"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => setFormValues({...formValues, message: e.target.value})}
                        error={errors.message.length !== 0}
                        helperText={errors.message}
                    />
                </Box>
            </CardContent>
            <CardActions>
                <Box mx={1}>
                    <Button variant="contained"
                            color="primary"
                            onClick={() => handleSubmit()}
                    >
                        Submit review
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default WriteReview;
