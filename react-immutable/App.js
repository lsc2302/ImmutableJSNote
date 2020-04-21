import React, { Component } from 'react';
import CartInfo from "./CartInfo";
import InputBar from './InputBar';

class App extends Component {
    constructor(props){
        super(props);
    }

    // save = ()=>{
    //     const goods_name = this.refs.goods_name.value;
    //     const count = this.refs.count.value;
    //     const newState = this.state.cart.set(goods_name, count);
    //     this.setState({
    //         cart:newState
    //     }) 
    // }

    render() { 
        return ( 
            <div>
                <InputBar />
                <hr />
                <CartInfo />
            </div>
         );
    }
}
 
export default App;