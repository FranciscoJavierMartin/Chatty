import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import './Register.scss';

export default function Register(): JSX.Element {
  return (
    <div className='auth-inner'>
      <div className='alerts alert-success' role='alert'>
        Error message
      </div>
      <form className='auth-form'>
        <div className='form-input-container'>
          <Input
            id='username'
            name='username'
            type='text'
            value=''
            placeholder='Username'
            label='Username'
          />
          <Input
            id='email'
            name='email'
            type='email'
            value=''
            placeholder='Email'
            label='Email'
          />
          <Input
            id='password'
            name='password'
            type='password'
            value=''
            placeholder='Password'
            label='Password'
          />
          <label className='checkmark-container' htmlFor='checkbox'>
            <input id='checkbox' type='checkbox' name='checkbox' />
            Keep me signed in
          </label>
        </div>
        <Button
          label='Register'
          className='auth-button button'
          disabled={false}
        />

        <span className='forgot-password'>
          Forgot password? <FaArrowRight />
        </span>
      </form>
    </div>
  );
}
