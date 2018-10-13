import React from 'react';

const ChessItem = (props) => {

    const itemNames = ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'];
    let name = itemNames[0];
    
    if (props.rowId === 0 || props.rowId === 7) {
        if (props.char === 'a' || props.char === 'h') {
            name = itemNames[1];
        } else if (props.char === 'b' || props.char === 'g') {
            name = itemNames[2];
        } else if (props.char === 'c' || props.char === 'f') {
            name = itemNames[3];
        } else if (props.char === 'd') {
            name = itemNames[4];
        } else if (props.char === 'e') {
            name = itemNames[5];
        }
    }
    return (<div id={props.id} className="chess-item">{name}</div>);
}

export default ChessItem;