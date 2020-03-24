import React, {useState} from 'react';
import {makeStyles, fade} from "@material-ui/core/styles";
import {InputBase, Grid, Box} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {connect} from "react-redux";
import {searchBook} from "../../../store/actions/books";

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));

const SearchBar = ({dispatch}) => {
    const [value, setValue] = useState('');
    const [typingTimout, setTypingTimeout] = useState(0);
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="center">
            <Grid item md={4}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        name="search"
                        value={value}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        fullWidth={true}
                        onChange={e => {
                            const value = e.target.value;
                            setValue(value);
                            clearTimeout(typingTimout);
                            if (value.length !== 0) {
                                setTypingTimeout(setTimeout(() => {
                                    dispatch(searchBook(value));
                                }, 1000));
                            }
                        }}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                clearTimeout(typingTimout);
                                dispatch(searchBook(value));
                            }
                        }}
                    />
                </div>
            </Grid>
        </Box>
    );
};

export default connect()(SearchBar);
