import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export default function SearchBar(props) {
    const { searchValue, setSearchValue, handleSearchOpen } = props;
    const textFieldRef = React.useRef(null);

    return (
        <TextField
            id="standard-search"
            label="Search field"
            inputRef={textFieldRef}
            type="search"
            variant="standard"
            value={searchValue}
            onChange={(e) => { setSearchValue(e.target.value); }}
            sx={{
                width: '50%',
                'input[type="search"]::-webkit-search-cancel-button': {
                    display: 'none',
                },
            }}
            onFocus={handleSearchOpen}
            color="info"
            InputProps={{
                endAdornment: searchValue ? (
                    <IconButton
                        onClick={() => setSearchValue('')}
                        edge="end"
                        size="medium"
                        tabIndex={-1}
                    >
                        <ClearIcon />
                    </IconButton>) : null
            }}
            clearButton={false}
        />
    );
}