/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.module.css';
import error from '../../utils/notification';

const INITIAL_STATE = {
  nickname: '',
  password: '',
  isLogIn: false
};

class AuthForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { nickname, password } = this.state;

    const loginPattern = /^[a-zA-Z0-9]{3,20}$/gm;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-\./:;<=>?@[\]^_`{\|}~])(?=.*[a-zA-Z]).{5,20}$/gm;

    if (!nickname || !password) {
      error('Write in all fields');
      return;
    }

    if (!loginPattern.test(nickname)) {
      error('Nickname did not pass validation');
      return;
    }

    if (!passwordPattern.test(password)) {
      error('Password did not pass validation');
      return;
    }

    this.setState({ nickname: '', password: '', isLogIn: true });
  };

  render() {
    const { nickname, password, isLogIn } = this.state;

    return isLogIn ? (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.welcome}>YOU'RE WELCOME!</h2>
        </div>
      </div>
    ) : (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form
            className={styles.registrationForm}
            onSubmit={this.handleSubmit}
          >
            <h2 className={styles.title}>LOGIN</h2>

            <input
              className={styles.nickname}
              value={nickname}
              name="nickname"
              onChange={this.handleChange}
              placeholder="Login"
            ></input>

            <input
              className={styles.password}
              type="password"
              autoComplete="current-password"
              size="12"
              onChange={this.handleChange}
              value={password}
              name="password"
              id=""
              placeholder="Password"
            ></input>

            <button className={styles.button} type="submit">
              <span className={styles.buttonText}> LOGIN </span>
            </button>

            <a href="#" className={styles.link}>
              Fogot password?
            </a>
          </form>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {
  nickname: PropTypes.string,
  password: PropTypes.string,
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

AuthForm.defaulProps = {
  nickname: '',
  password: '',
  onSubmit: () => {},
  handleChange: () => {}
};

export default AuthForm;
