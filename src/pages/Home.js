import React from 'react';
import {connect} from 'react-redux';

const Home = ({theme, dispatch}) => {
    return (
        <div>
          Home
        </div>
    );
};

function matchStateToProps({appTheme}) {
    return {
        theme: appTheme.theme
    }
}

export default connect(matchStateToProps)(Home);
