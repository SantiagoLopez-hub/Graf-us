import React from 'react';

function CText(props) {
    return (
        <div style={{...props.textStyle, ...props.style }}>{props.children}</div>
    );
}

export default CText;