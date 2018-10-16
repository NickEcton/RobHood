import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={"auto"} width={'12%'} />
);

export default Loader;
