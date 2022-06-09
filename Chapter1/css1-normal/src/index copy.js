import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import Button from './Button';

ReactDOM.render(
    <div>
        <Button size="big"></Button>
        <Button size="small"></Button>
        <Box size="big"></Box>
        <Box size="small"></Box>
    </div>,
    document.getElementById('root')
);