import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import NoImage from "../../assets/images/No_picture_available.png";
import {Link} from "react-router-dom";
import {Grow} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "150px",
        margin: "10px",
    },
    actionArea: {
        flexGrow: 1
    }
});

const Book = ({cover_edition_key, title, cover_id, timeout}) => {
    const classes = useStyles();
    const [cardRaised, setCardRaised] = useState(false);
    const imageUrl = cover_id
        ? `http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
        : NoImage;
    const bookId = cover_edition_key ? cover_edition_key : '';

    return (
        <Grow addEndListener={null} in timeout={timeout}>
            <Card className={classes.root}
                  raised={cardRaised}
                  onMouseOver={() => setCardRaised(true)}
                  onMouseOut={() => setCardRaised(false)}
            >
                <CardActionArea className={classes.actionArea}>
                    <Link to={`/book?id=${bookId}`}>
                        <CardMedia
                            component="img"
                            height="250"
                            width="130"
                            image={imageUrl}
                            title={title}
                        />
                    </Link>
                </CardActionArea>
            </Card>
        </Grow>
    );
};

export default Book;
