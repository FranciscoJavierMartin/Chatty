import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import './ForgotPassword.scss';

export default function ForgotPassword(): JSX.Element {
  return (
    <div className='container-wrapper'>
      <div className='environment'>DEV</div>
      <div className='container-wrapper-auth'>
        <div className='tabs forgot-password-tabs'>
          <div className='tabs-auth'>
            <ul className='tab-group'>
              <li className='tab'>
                <div className='login forgot-password'>Forgot Password</div>
              </li>
            </ul>

            <div className='tab-item'>
              <div className='auth-inner'>
                <form className='auth-form'>
                  <div className='form-input-container'>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value=''
                      placeholder='Email'
                      label='Email'
                    />
                  </div>
                  <Button
                    label='Sign In'
                    className='auth-button button'
                    disabled={false}
                  />
                  <Link to='/'>
                    <span className='forgot-password'>
                      <FaArrowLeft /> Back to login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
