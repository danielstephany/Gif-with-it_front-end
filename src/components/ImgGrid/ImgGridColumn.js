import React, {Component} from 'react';


class ImgGridColumn extends Component {
    
    creatColumn = (columnData) => {
        return columnData.map(item => <img key={item.id} src={item.images.fixed_width.url} alt={item.title || 'no description avilable'} />);
    }

    render = () => {
        return <div className="img-grid__column" >{this.creatColumn(this.props.columnData)}</div>;
    }
}

export default ImgGridColumn;