import React from 'react';
import request from '../utils/request'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onSignIn = () => {
    const { username, password } = this.state;
    request({
      url: '/sign-in',
      method: 'post',
      data: {
        username,
        password
      }
    }).then(() => {
      //
    }).catch(() => {
      //
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeUsername} placeholder="用户名" />
        <input type="password" onChange={this.onChangePassword} placeholder="密码" />
        <button onClick={this.onSignIn}>登录</button>
      </div>
    );
  }
}

export default SignIn;
