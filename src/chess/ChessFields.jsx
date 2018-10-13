import React from 'react';
import ChessItem from './ChessItem'

const ChessField = (props) => {

    const id = props.id.split('_');
    const cellId = parseInt(id[1]);
    const rowId = parseInt(id[2]);
    const fieldId = id[0] + '_' + rowId
    let style = (cellId % 2 === 0) ? 'field' : 'field black';

    if (rowId % 2 === 1) {
        style = (cellId % 2 === 1) ? 'field' : 'field black';
    }
    if (rowId < 2 || rowId > 5) {
        return (
            <div id={fieldId} className={style}>
                <ChessItem rowId={rowId} char={id[0]} id={fieldId} key={id} />
            </div>);
    } else {
        return (<div id={fieldId} className={style}>{fieldId}</div>);
    }
    
};

export default ChessField;