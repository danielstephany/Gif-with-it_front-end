import React from 'react';
import Container from '@components/Container';
import Row from '@components/Row';
import Col from '@components/Col';

const Grid = React.forwardRef(function grid(props, ref) {
    const { container, row, col, children, ...others } = props;
    let gridElement;

    if (row) {
        gridElement = <Row ref={ref} {...others} >{children}</Row>
    } else if (col) {
        gridElement = <Col ref={ref} {...others} >{children}</Col>
    } else {
        gridElement = <Container ref={ref} {...others} >{children}</Container>
    }

    return gridElement;

});

export default Grid;