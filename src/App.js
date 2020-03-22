import React from 'react';
import Routes from "./routes";
import { ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {getTheme} from "./store/actions/theme";
import "./scss/main.scss";
import { CssBaseline } from '@material-ui/core';
import {createTheme} from "./theme";


const App = ({theme, dispatch}) => {
    React.useEffect(() => {
        dispatch(getTheme())
    });
    const muiTheme = React.useMemo(() => createTheme(theme), [theme]);

  return (
      <ThemeProvider theme={muiTheme}>
          <CssBaseline/>
          <Routes/>
      </ThemeProvider>

  );
};

function mapStateToProps({appTheme}) {
    return {
        theme: appTheme.theme
    }
}

export default connect(mapStateToProps)(App);
