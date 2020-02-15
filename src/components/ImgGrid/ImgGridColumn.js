import React, {Component} from 'react';


class ImgGridColumn extends Component {
    
    creatColumn = (columnData) => {
        console.log(columnData[0].images.fixed_width_small);
        return columnData.map(item => <img src={item.images.fixed_width_small.url} />);
    }

    render = () => {
        return <div>{this.creatColumn(this.props.columnData)}</div>;
    }
}

export default ImgGridColumn;