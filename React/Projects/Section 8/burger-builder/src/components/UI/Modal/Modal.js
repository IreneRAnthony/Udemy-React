import React, { Component } from 'react';

import classes from './Modal.css';
import Auxilliary from '../../../hoc/Auxilliary';
import Backdrop from '../Modal/Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    };

    componentDidUpdate(){
        console.log('[Modal] will update.');
    }

    render() {
        return( 
            <Auxilliary>
                <Backdrop 
                    show={this.props.show}
                    clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxilliary>
        )
    }
};

export default Modal;