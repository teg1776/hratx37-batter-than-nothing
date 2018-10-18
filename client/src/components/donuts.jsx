import React from 'react';

// 
const Donuts = ({donuts}) => donuts.map(donut => <div>{donut.name}</div>)

export default Donuts;