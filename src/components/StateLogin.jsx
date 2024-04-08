import { useState } from 'react';
import Input from './Input';
import { isEmail } from '../util/validation';

export default function Login() {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = !isEmail(enteredEmail) && didEdit.email;

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputBlur(identifier) {
    setDidEdit(prev => ({
      ...prev,
      [identifier] : true
    })
  )}

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
    setDidEdit(prev => ({
      ...prev, 
      email : false
    }))
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label='Email' 
          id='email' 
          type='email' 
          name='email' 
          onBlur={() => handleInputBlur('email')}
          onChange={handleEmailChange}
          value={enteredEmail}
          error={emailIsInvalid && 'Please enter valid email address'}
        />

        <Input 
          label='Password' 
          id='password' 
          type='password' 
          name='password' 
          onChange={handlePasswordChange}
          onBlur={() => handleInputBlur('password')}
          value={enteredPassword}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type='submit'>Login</button>
      </p>
    </form>
  );
}
