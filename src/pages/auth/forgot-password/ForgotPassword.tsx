import { FormEvent, FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import './ForgotPassword.scss';
import { authService } from '../../../services/api/auth/auth.service';

export default function ForgotPassword(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');

  const forgotPasswordUser: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent,
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await authService.forgotPassword(email);
      console.log(result);
      setEmail('');
      setShowAlert(false);
      setAlertType('alert-success');
      setResponseMessage(result.data?.message);
    } catch (error: any) {
      setResponseMessage(error?.response.data?.message);
      setAlertType('alert-error');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container-wrapper'>
      <div className='environment'>DEV</div>
      <div className='container-wrapper-auth'>
        <div
          className='tabs forgot-password-tabs'
          style={{ height: responseMessage ? '300px' : '' }}
        >
          <div className='tabs-auth'>
            <ul className='tab-group'>
              <li className='tab'>
                <div className='login forgot-password'>Forgot Password</div>
              </li>
            </ul>
            <div className='tab-item'>
              <div className='auth-inner'>
                {responseMessage && showAlert && (
                  <div className={`alerts ${alertType}`} role='alert'>
                    {responseMessage}
                  </div>
                )}
                <form className='auth-form' onSubmit={forgotPasswordUser}>
                  <div className='form-input-container'>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={email}
                      placeholder='Email'
                      label='Email'
                      handleChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    type='submit'
                    label='Sign In'
                    className='auth-button button'
                    disabled={isLoading || !email}
                    handleClick={() => {}}
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
