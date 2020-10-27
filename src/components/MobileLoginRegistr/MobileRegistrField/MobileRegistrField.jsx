import React, { Component } from 'react';
import styles from '../mobailLoginRegistr.module.css';

class MobileRegistrField extends Component {

    render() {

        return (
            <div className={styles.mobileLoginRegistrField__wrapper}>
                <p className={styles.mobileLoginRegistrField__text}>Уже есть аккаунт?{' '}
                <button 
                    className={styles.mobileLoginRegistrField__Bth} 
                    onClick={() => this.props.onToggleToLogin()}
                    >Зарегистрироваться</button></p>
            </div>
        )
    }

}
export default MobileRegistrField;