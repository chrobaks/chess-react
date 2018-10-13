import React from 'react';

const ChessItem = (props) => {

    const itemNames = ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'];
    let name = itemNames[0];

    if (props.rowId === 0 || props.rowId === 7) {
        // eslint-disable-next-line
        switch(props.char) {
            case 'a':
            case 'h':
                name = itemNames[1];
                break;
            case 'b':
            case 'g':
                name = itemNames[2];
                break;
            case 'c':
            case 'f':
                name = itemNames[3];
                break;
            case 'd':
                name = itemNames[4];
                break;
            case 'e':
                name = itemNames[5];
                break;
        }
    }
    return (<div id={props.id} className="chess-item">{name}</div>);
}

export default ChessItem;