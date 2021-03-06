import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Irene Anthony',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '36582',
                    country: 'USA'
                },
                emailAddress: 'test@thisisatest.com',
                deliveryMethod: 'fastest'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            })
            this.props.history.push('/');
    }

    render(){
        let form = (
            <form>
                <input className={classes.Input} type='text' name="name" placeholder="Your Name" />
                <input className={classes.Input} type='email' name="email" placeholder="Your Email" />
                <input className={classes.Input} type='text' name="street" placeholder="Street" />
                <input className={classes.Input} type='text' name="postalCode" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order Now</Button>
            </form>);
        if(this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;