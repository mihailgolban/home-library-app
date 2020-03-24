import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBookDetails} from "../../store/actions/books";
import PropTypes from "prop-types";
import {addReview} from "../../store/actions/books";
import Progress from "../../components/Progress";

class BookDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const {bookId, dispatch} = this.props;
        this.setState({isLoading: true});
        dispatch(getBookDetails(bookId)).then(() => this.setState({isLoading: false}));
    }

    handleSubmitReview = (review) => {
        const {bookId, dispatch} = this.props;
        const date = new Date();
        const dateString = date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes();
        dispatch(addReview(bookId, {...review, date: dateString}));
    };

    render() {
        const {children, bookDetails, bookId, bookReviews} = this.props;
        const reviews = bookReviews.filter(bookReview => {
            return bookReview.bookId === bookId;
        });

        const rating = reviews.reduce((acc, cur) => acc + cur.review.rating, 0) / reviews.length;
        const {isLoading} = this.state;

        return isLoading ? <Progress/> : children({
            bookDetails: bookDetails[bookId],
            reviews: reviews,
            handleSubmitReview: this.handleSubmitReview,
            rating: rating
        });
    }
}

function mapStateToProps({booksReducer}) {
    return {
        bookDetails: booksReducer.bookDetails,
        bookReviews: booksReducer.bookReviews
    }
}

BookDetailsContainer.propTypes = {
    bookId: PropTypes.string
};

export default connect(mapStateToProps)(BookDetailsContainer);
