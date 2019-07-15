import React, {useState} from 'react'
import Test from './Test';

const App = props => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState('Biplav')

    function addCount(){
        count++
        setCount(count);
    }
    const minusCount = () => {
        count--
        setCount(count)
    }
    const updateName = () => {
        setName('Prachanda')
    }
    return(
        <>
            <Test name={name}/>
            <h1>{count}</h1>
            <button onClick={addCount}>+1</button>
            <button onClick={minusCount}>-1</button>
            <button onClick={updateName}>Change Name</button>
        </>
    )
}

export default App

// import React, { Component } from 'react'

// export default class App extends Component {
//     state ={
//         count: 0
//     }
//     addCount = () => {
//         let num = this.state.count + 1;
//         this.setState({
//             count: num
//         })
//     }
//     minusCount = () => {
//         let num = this.state.count - 1;
//         this.setState({
//             count: num
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.addCount}>+1</button>
//                 <button onClick={this.minusCount}>+1</button>
//             </div>
//         )
//     }
// }
