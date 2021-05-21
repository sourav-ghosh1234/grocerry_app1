import React, { Component } from 'react'

const Context=React.createContext();
const reducer=(prevState,action)=>{
    switch(action.type){
        case "TOGGLE":
            return {
                grocery:prevState.grocery.map(item=>{
                    
                    if(item.id===action.payload){
                        console.log("called")
                        item.complete=true
                        return item;

                    }
                        
                    
                    return item;
                })
                
            }
        default:
            return prevState;
    }

}


export  class Provider extends Component {

    state={
        grocery:[
            {
                id:1,
                title:"check emails",
                complete:false
            },
            {
                id:2,
                title:"check emails",
                complete:true
            },
            {
                id:3,
                title:"check emails",
                complete:false
            },
            {
                id:4,
                title:"check emails",
                complete:false
            }
        ],
        dispatch:(action)=>this.setState(prevState=>{
            console.log("prevState",prevState)
            reducer(prevState,action)})
    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
                
            </div>
        )
    }
}

export const Consumer=Context.Consumer;

