import React from 'react';

class SignUp extends React.Component {
  gotoSignIn = () => {
    this.props.history.replace('/sign-in');
  }

  render() {
    return (
      <div>
        SignUp
        <button onClick={this.gotoSignIn}>to SignIn</button>
      </div>
    );
  }
}

export default SignUp;
