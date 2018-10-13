import React, { Component } from 'react';
import ChessField from './ChessFields';

class Chess extends Component {
    
    getFields = () => {

        const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let fields = [];

        for( let i =0; i < chars.length; i++) {
            chars.forEach((value, index) => {
                fields.push(value + '_' + index + '_' + i);
            })
        }

        return fields;
    }

    render() {

        const fields = this.getFields();

        return (
            <div>
                {
                    fields.map((value, index) => {
                        return(<ChessField id={value} key={index}/>);
                    })
                }
            </div>
        )
    }
}

export default Chess;