import React, {Component} from 'react';
import Shelves from "./Shelves";
import {connect} from "react-redux";
import {addShelfReview} from "../../store/actions/shelves";

class ShelvesContainer extends Component {

    handleShelfReview = (review) => {
        const {selectedShelfId, dispatch} = this.props;
        const date = new Date();
        const dateString = date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes();
        dispatch(addShelfReview(selectedShelfId, {...review, date: dateString}));
    };

    render() {
        const {selectedShelfId, books, shelfReviews, shelves} = this.props;
        const reviews = shelfReviews.filter(review => {
            return review.shelfId === selectedShelfId;
        });
        const shelfBooks = books.filter(book => {
            return book.shelfId === selectedShelfId;
        });
        const showReview = Object.keys(shelves).length !== 0;
        const shelfCategories = shelves[selectedShelfId] ? shelves[selectedShelfId].categories : [];
        return (
            <Shelves
                books={shelfBooks}
                reviews={reviews}
                handleShelfReview={this.handleShelfReview}
                showReview={showReview}
                shelfCategories={shelfCategories}
            />
        );
    }
}

function mapStateToProps({shelvesReducer}) {
    return {
        shelves: shelvesReducer.shelves,
        selectedShelfId: shelvesReducer.selectedShelfId,
        books: shelvesReducer.books,
        shelfReviews: shelvesReducer.shelfReviews
    }
}

export default connect(mapStateToProps)(ShelvesContainer);
