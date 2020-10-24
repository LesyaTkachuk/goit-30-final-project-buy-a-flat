import React, { Component } from 'react';
import styles from '../loginRegistForm.module.css';
// import {connect} from 'react-redux';

class LoginForm extends Component {
    state = {
        email:'',
        password:'',
        passwordErorr:'',
     };

     handleChange = ({target: {name, value}}) => {
         this.setState({[name]: value})
     }
     handleSubmit = e => {
         e.preventDefault();

         const isValid = this.validate();  
        
         if(isValid){
 
            this.setState({
                nameErorr: "",
                emailErorr: "",
                passwordErorr: ""
             });
 
             this.props.onLogin({...this.state});
             this.setState({name:'', email:'',password:''})
     
         }

     }

     validate = () => {
         console.log('validate');
         let passwordErorr = "";

         if(this.state.password.length < 3 || this.state.password.length > 8 || !this.state.password.length){

            passwordErorr = "Неверный пароль!";
            this.setState({passwordErorr});
            return false;
         }

         return true;
     }

    render() {

        const {email, password} = this.state;

        return (
            <div className={styles.modal__login}>

                <form onSubmit={this.handleSubmit} className={styles.loginRegist__form}>

                    <h2 className={styles.loginRegist__heading}>Вход</h2>

                    <label className={styles.loginRegist__inputform}>
                        <label className={styles.loginRegist__input_text}>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Your@e-mail.com"
                            className={styles.loginRegist__input}
                            onChange={this.handleChange}
                        />
                    <div className={styles.loginRegist__invalid}>{this.state.emailErorr}</div>
                    </label>
                    
                    <br/>
                    <label className={styles.loginRegist__inputform}>
                        <label className={styles.loginRegist__input_text}>Пароль</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Введите пароль"
                            className={styles.loginRegist__input}
                            onChange={this.handleChange}
                        />
                    <div className={styles.loginRegist__invalid}>{this.state.passwordErorr}</div>
                    </label>
                    <br/>

                    <button type="submit" className={styles.loginRegist__Bth}><p className={styles.loginRegist__Bth_text}>Войти</p></button>
                    <p className={styles.loginRegist_mobile__Text}>Еще нет аккаунта? <button className={styles.loginRegist_mobile__Bth}>Зарегистрироваться</button></p>
                </form>
            </div>
        )
    }
    
}
export default LoginForm;