/**
 * Revised by zhusass on 2017/11/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import echarts from 'echarts'

import './index.less'

class Graph extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: this.props.width || '100%',
            height: this.props.height || '400px',
        }
    }

    componentDidMount() {

        echarts.init(this.refs['gragraphic']).setOption(this.props.options)
    }

    render() {
        return <div ref="gragraphic" className="gragraphic" style={{width: this.state.width, height: this.state.height}}>
        </div>
    }
}

Graph.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    options: PropTypes.object,
}

Graph.defaultProps = {
    options: {},
}

export default Graph