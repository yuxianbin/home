/**
 * Revised by zhusass on 2017/11/20.
 */

import React from 'react'

class Tables extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            columns: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps)
    }

    render() {
       return <div className="tables">

       </div>
    }
}

Tables.defaulteProps = {
    table_data: {}, // key name
}
