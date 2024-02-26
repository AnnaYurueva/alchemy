import React from "react";

interface IEmoji {
    label: string;
    symbol: string;
    size?: number
}

function Emoji({label, symbol, size = 50}: IEmoji) {
    return (
        <span
            style={{fontSize: `${size}px`, cursor: 'pointer'}}
            className="emoji"
            role="img"
            aria-label={label}
        >
            {symbol}
        </span>
    );
}

export default React.memo(Emoji)