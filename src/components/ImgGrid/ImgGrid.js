import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './imgGrid.scss';
import ImgGridColumn from './ImgGridColumn';

class ImgGrid extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            columnArray: []
        }
    }

    componentDidMount = () => {
        const chunkedData = this.chunkRowIems(this.props.imgArray);
        const imgColumns = this.buildColumns(chunkedData);
        this.setState({columnArray: imgColumns});
    }

    chunkRowIems = (items) => {
        let length = items.length;
        let colSwitch = Math.floor(length / this.props.columns);
        let activeCol = 0;
        let columns = []
        console.log(colSwitch);
        for(let i = 0; i < length; i++){
            if (i >= colSwitch) {
                colSwitch += colSwitch;
                activeCol++;
            }
            if (!Array.isArray(columns[activeCol])){
                columns[activeCol] = [];
            }
            columns[activeCol].push(items[i])
        }
        return columns;
    }

    buildColumns = (columnData) => {
        return columnData.map(col => <ImgGridColumn columnData={col} />);
    }

    render = () => {
        const {className, children, imgArray, ...others} = this.props,
            baseClass = 'img-grid',
            classes = className ? baseClass + ' ' + className : baseClass

        return <div className={classes} {...others} >{this.state.columnArray}</div>;
    }

}

ImgGrid.propTypes = {
    columns: PropTypes.number.isRequired,
    imgArray: PropTypes.array.isRequired
}

export default ImgGrid;