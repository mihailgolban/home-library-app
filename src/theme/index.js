import {createMuiTheme} from "@material-ui/core";
import {LIGHT_THEME} from "../store/actions/theme";

export function createTheme(theme) {
    if (theme === LIGHT_THEME) {
        return createMuiTheme({
            palette: {
                type: theme,
                primary: {
                    main: "#2458B3"
                },
                background: {
                    default: "#e2e2e2"
                }
            }
        });
    } else {
        // Dark theme
        return createMuiTheme({
            palette: {
                type: theme,
                primary: {
                    main: "#62D96B"
                },
            }
        });
    }
}
