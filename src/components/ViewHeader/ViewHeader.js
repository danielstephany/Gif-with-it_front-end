import React from 'react';
import './viewHeader.scss';

const ViewHeader = (props) => {
    return <h2 className="view-header">{props.children}</h2>
}

export default ViewHeader;