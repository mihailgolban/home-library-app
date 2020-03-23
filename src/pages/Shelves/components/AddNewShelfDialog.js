import React, {useState} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    Input,
    MenuItem,
    Checkbox,
    ListItemText
} from "@material-ui/core";
import {bookCategories} from "../contants/bookCategories";


const validateForm = (name, shelves) => new Promise((resolve, reject) => {
    if (!name.length) {
        reject('Name is required');
    }

    // test unique name
    const testUnique = Object.keys(shelves).find(shelfId => {
        return name === shelves[shelfId].name;
    });
    if (testUnique !== undefined) {
        reject('This name is already taken');
    }

    resolve();
});


const AddNewShelfDialog = ({shelves, open, handleClose, handleSubmit}) => {
    const [categories, setCategories] = React.useState([]);
    const [name, setName] = useState('');
    const [error, setError] = React.useState('');
    const handleChange = event => {
        setCategories(event.target.value);
    };

    const resetForm = () => {
        setCategories([]);
        setName('');
        setError('');
    };

    return (
        <Dialog open={open}
                onClose={() => {
                    resetForm();
                    handleClose();
                }}
                aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">New shelf</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To create a new shelf, enter a shelf name.
                </DialogContentText>
                <FormControl fullWidth={true} margin="normal">
                    <TextField
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Shelf name"
                        type="text"
                        fullWidth
                        error = {error.length !== 0}
                        helperText={error}
                    />
                </FormControl>
                <FormControl fullWidth={true} margin="normal">
                    <InputLabel id="demo-mutiple-checkbox-label">Categories(optional)</InputLabel>
                    <Select
                        labelId="mutiple-checkbox-label"
                        id="mutiple-checkbox"
                        multiple
                        value={categories}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {bookCategories.map(category => (
                            <MenuItem key={category} value={category}>
                                <Checkbox checked={categories.indexOf(category) > -1} />
                                <ListItemText primary={category} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    validateForm(name, shelves)
                        .then(() => {
                            handleSubmit(name, categories);
                            resetForm();
                        })
                        .catch(err => setError(err));
                }} color="primary"
                >
                    Create new shelf
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddNewShelfDialog;
