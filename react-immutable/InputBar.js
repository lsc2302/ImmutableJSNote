import React, { Component } from 'react';
import {connect} from 'react-redux'
class InputBar extends Component {

    save = ()=>{
        const goods_name = this.refs.goods_name.value;
        const count = this.refs.count.value;
        this.props.saveToCart({
            goods_name,
            count
        })
    }

    render() { 
        return ( 
            <div>
                good:<input type="text" ref="goods_name" /><br/>
                count:<input type="number" ref="count" /><br/>
                <button onClick={this.save}>Save</button>
            </div>
         );
    }
}

const mapDispatchToProps=(dispatch)=>({
    saveToCart:function(json){
        dispatch({
            type:"SAVE_TO_CART",
            payload:json
        });
    }
})
 
export default connect(null,mapDispatchToProps)(InputBar);