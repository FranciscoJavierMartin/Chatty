import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import './Login.scss';

export default function Login(): JSX.Element {
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
        <Button label='Login' className='auth-button button' disabled={false} />

        <Link to='/forgot-password'>
          <span className='forgot-password'>
            Forgot password? <FaArrowRight />
          </span>
        </Link>
      </form>
    </div>
  );
}
