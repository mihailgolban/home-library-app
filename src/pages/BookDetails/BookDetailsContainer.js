import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBookDetails} from "../../store/actions/books";
import PropTypes from "prop-types";

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

    render() {
        const {children, bookDetails, bookId} = this.props;
        const {isLoading} = this.state;

        return isLoading ? <div>Loading...</div> : children(bookDetails[bookId]);
    }
}

function mapStateToProps({booksReducer}) {
    return {
        bookDetails: booksReducer.bookDetails
    }
}

BookDetailsContainer.propTypes = {
    bookId: PropTypes.string
};

export default connect(mapStateToProps)(BookDetailsContainer);
