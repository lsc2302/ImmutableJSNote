import React, { Component } from 'react';
import {connect} from 'react-redux'
class CartInfo extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        //return !is(nextProps.cart, this.props.cart)
        return !nextProps.cart.equals(this.props.cart);
    }

    render() {
        console.log("render"); 
        const lis = [];
        this.props.cart.forEach((v,k)=>{
            lis.push(<li key={k}>good:{k} count:{v}</li>)
        });
        return ( 
            <div>
                <ul>
                    {lis}
                </ul>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    cart:state.get('cart')
})
 
export default connect(mapStateToProps, null)(CartInfo);