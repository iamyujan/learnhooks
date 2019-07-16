import React, {useState, useEffect} from 'react'
import Test from './Test';
import Axios from 'axios';

const App = props => {
    let [count, setCount] = useState(0)
    let [name, setName] = useState('Biplav')
    let [todos, setTodos]= useState([]);

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
    useEffect(() => {
        if(todos.length === 0){
            console.log('e')
            Axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(data => {
                setTodos(data.data);
            })
        }
    })

    return(
        <>
            <Test name={name}/>
            <h1>{count}</h1>
            <button onClick={addCount}>+1</button>
            <button onClick={minusCount}>-1</button>
            <button onClick={updateName}>Change Name</button>
            <ul>
            {
                todos.map(todo => {
                    return(
                        <li key={todo.id}>{todo.title}</li>
                    )
                })
            }
            </ul>
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
