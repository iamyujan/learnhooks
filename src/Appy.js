import React, { Component, useState } from 'react'

export default class Appy extends Component {
    constructor(props){
        super(props)
        this.state = {
            hello: 'world'
        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillUpdate(){

    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div>
                hello world
            </div>
        )
    }
}

const hello = props => {
    let [hello, setHello] = useState('world')
    useEffect(() => {
        
    })
    return(
        <div>{hello}</div>
    )
}