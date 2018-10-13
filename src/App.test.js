import React from 'react';
import ReactDOM from 'react-dom';
import Chess from './chess/Chess';
import ChessField from './chess/ChessFields';

it('renders chess board without crashing', () => {
  const divRoot = document.createElement('div');
  ReactDOM.render(<Chess />, divRoot);
  ReactDOM.unmountComponentAtNode(divRoot);
});


it('renders chess fields board without crashing', () => {

  const divRoot = document.createElement('div');
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let fields = [];

  for( let i =0; i < chars.length; i++) {
      chars.forEach((value, index) => {
          fields.push(value + '_' + index + '_' + i);
      })
  }
  fields.forEach((value, index) => {
      ReactDOM.render(<ChessField id={value} key={index}/>, divRoot);
      console.log(value);
  });

  ReactDOM.unmountComponentAtNode(divRoot);
});
