import React, { Component } from 'react';
import styles from '../mobailLoginRegistr.module.css';

class MobileLoginField extends Component {
// mobailLoginRegistr.module
    render() {

        return (
            <div className={styles.mobileLoginRegistrField__wrapper}>
                <p className={styles.mobileLoginRegistrField__text}>Уже есть аккаунт?{' '}
                <button 
                    className={styles.mobileLoginRegistrField__Bth} 
                    onClick={() => this.props.onToggleToRegistration()}
                    >Войти</button></p>
            </div>
        )
    }

}
export default MobileLoginField;