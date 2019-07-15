// import React, { Component } from 'react'

// export default class Test extends Component {
//     render() {
//         return (
//             <div>
//                 Welcome {this.props.name}
//             </div>
//         )
//     }
// }

import React from 'react'
const Test = props => {
    return(
        <>
            Welcome {props.name}
        </>
    )
}

export default Test