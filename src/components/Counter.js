// import React, { Component } from 'react'
// import Demo from './Demo'

// export default class Counter extends Component {
//     state={
//         name:"arya"
        
//     }
//     changemyname=()=>{
//         this.setState({
//             name:"abc"
//         })
        
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello {this.state.name}</h1>

//             <Demo data={this.state.name
//              } />
//              <button onClick={this.changemyname}
//              >change my name</button>
//              </div>
            
//         )
//     }
// }







import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        counter:0
    }
    incrementValue=()=>{
        this.setState({
            counter:this.state.counter+1
        })
        
    }
    decrementValue=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    render() {
        
        return (
            <div>
                  <h1>{this.state.counter}</h1>

                 <button onClick={this.incrementValue}>+</button>
                 <button onClick={this.decrementValue}>-</button>
            </div>
        
        )
    }
}

