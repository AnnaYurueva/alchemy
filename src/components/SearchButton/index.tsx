import React from "react";
import {Button, Typography} from "@mui/material";

interface ISearchButton {
    onClick: () => void;
}

function SearchButton({onClick}:ISearchButton) {
    return (
        <Button color="info" sx={{width: '100px', height: '100px'}} onClick={onClick}>
            <Typography variant='h2'>?</Typography>
        </Button>
    )
}

export default React.memo(SearchButton)