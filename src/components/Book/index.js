import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import NoImage from "../../assets/images/No_picture_available.png";
import {Link} from "react-router-dom";
import {Grow} from "@material-ui/core";
import Image from 'material-ui-image'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "150px",
        margin: "10px",
        maxWidth: "150px"
    },
    actionArea: {
        flexGrow: 1
    }
});

const Book = ({bookId, title, timeout, coverUrl}) => {
    const classes = useStyles();
    const [cardRaised, setCardRaised] = useState(false);

    const imageUrl = coverUrl ? coverUrl : NoImage;

    return (
        <Grow addEndListener={null} in timeout={timeout}>
            <Card className={classes.root}
                  raised={cardRaised}
                  onMouseOver={() => setCardRaised(true)}
                  onMouseOut={() => setCardRaised(false)}
            >
                <CardActionArea className={classes.actionArea}>
                    <Link to={`/book?id=${bookId}`}>
                        <Image src={imageUrl}
                               imageStyle={{height: "250px", width: "150px", objectFit: "cover"}}
                               disableSpinner={true}
                               style={{height: "250px", width: "150px"}}
                        />
                    </Link>
                </CardActionArea>
            </Card>
        </Grow>
    );
};

export default Book;
