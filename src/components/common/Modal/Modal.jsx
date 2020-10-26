import React, {Component} from 'react';
import styles from './Modal.module.css';
// import style from './modal.css';

export default class Modal extends Component {
    
    componentDidMount(){
        // console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount(){
        // console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e =>{
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    
 
    handleBackdropClick = e => {
        // console.log(e.target);
        // console.log(e.currentTarget);
      if (e.target === e.currentTarget) {
        this.props.onClose();
      }
    };
    
    render() {
      return (
        <div className={styles.overlay} onClick={this.handleBackdropClick} >
            {/* <div className={styles.modal}>{this.props.children}</div> */}
            {this.props.children}
        </div>
      )
    };
}
