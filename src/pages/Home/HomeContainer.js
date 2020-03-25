import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBooks} from "../../store/actions/books";
import Home from "./Home";
import PropTypes from 'prop-types';
import Progress from "../../components/Progress";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        this.setState({isLoading: true});
        dispatch(getBooks('love', {limit: 21}))
            .then(() => this.setState({isLoading: false}))
    }

    render() {
        const {books} = this.props;
        const {isLoading} = this.state;
        return isLoading ? <Progress/> : <Home books={books}/>;
    }
}

HomeContainer.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        title: PropTypes.string,
        cover_id: PropTypes.number,
        cover_edition_key: PropTypes.string
    }))
};

function mapStateToProps({booksReducer}) {
    return {
        books: booksReducer.books
    }
}

export default connect(mapStateToProps)(HomeContainer);
