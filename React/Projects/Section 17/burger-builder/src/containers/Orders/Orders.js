import React, { Component } from 'react';
import {connect} from 'react-redux';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import Order from '../../components/Order/Order';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render(){
        let orders = <Spinner />;
        if(!this.props.loading){
            return orders = (
                this.props.orders.map(order => (
                    <Order
                        ingredients = {order.ingredients}
                        price = {+order.price}
                        key={order.id} />
                ))
            )
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));