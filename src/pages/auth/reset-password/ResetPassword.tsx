import { FormEvent, FormEventHandler, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import backgroundImage from '../../../assets/images/background.jpg';
import './ResetPassword.scss';
import { authService } from '../../../services/api/auth/auth.service';

export default function ResetPassword(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [searchParams] = useSearchParams();

  const resetPasswordUser: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent,
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await authService.resetPassword(
        searchParams.get('token')!,
      );
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
    <div
      className='container-wrapper'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='container-wrapper-auth'>
        <div
          className='tabs reset-password-tabs'
          style={{ height: `${responseMessage ? '400px' : ''}` }}
        >
          <div className='tabs-auth'>
            <ul className='tab-group'>
              <li className='tab'>
                <div className='login reset-password'>Reset Password</div>
              </li>
            </ul>
            <div className='tab-item'>
              <div className='auth-inner'>
                <div className='alerts' role='alert'>
                  Error message
                </div>
                <form
                  className='reset-password-form'
                  onSubmit={resetPasswordUser}
                >
                  <div className='form-input-container'>
                    <Input
                      id='password'
                      name='password'
                      type='password'
                      value={password}
                      label='New Password'
                      placeholder='New Password'
                      handleChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                      id='cpassword'
                      name='cpassword'
                      type='password'
                      value={confirmPassword}
                      label='Confirm Password'
                      placeholder='Confirm Password'
                      handleChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type='submit'
                    label='RESET PASSWORD'
                    className='auth-button button'
                    disabled={isLoading && !confirmPassword && !password}
                    handleClick={() => {}}
                  />

                  <Link to={'/'}>
                    <span className='login'>
                      <FaArrowLeft className='arrow-left' /> Back to Login
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
