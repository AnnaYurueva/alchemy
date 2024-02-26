import React from "react";
import {Card as MuiCard, Tooltip} from "@mui/material";

type Props = {
    title: string,
    id: string,
    children?: JSX.Element,
    onClick?: () => void;
};

function Card({children, title, onClick}: Props) {
    return (
        <Tooltip title={title} placement="bottom">
            <MuiCard onClick={onClick}>
                {children}
            </MuiCard>
        </Tooltip>

    )
}

export default React.memo(Card)