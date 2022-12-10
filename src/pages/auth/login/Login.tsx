import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { authService } from '@/services/api/auth/auth.service';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import './Login.scss';

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [keepLogging, setKeepLogging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [alertType, setAlertType] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading && !user) {
    } else if (user) {
      setIsLoading(false);
      navigate('/app/social/streams');
    }
  }, [isLoading, user, navigate]);

  const loginUser: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent,
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await authService.singIn({
        username,
        password,
      });
      console.log(result);
      setUser(result.data.user);
      setHasError(false);
      setAlertType('alert-success');
    } catch (error: any) {
      setErrorMessage(error?.response?.data.message);
      setHasError(true);
      setAlertType('alert-error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='auth-inner'>
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role='alert'>
          {errorMessage}
        </div>
      )}
      <form className='auth-form' onSubmit={loginUser}>
        <div className='form-input-container'>
          <Input
            id='username'
            name='username'
            type='text'
            value={username}
            placeholder='Username'
            label='Username'
            handleChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id='password'
            name='password'
            type='password'
            value={password}
            placeholder='Password'
            label='Password'
            handleChange={(e) => setPassword(e.target.value)}
          />
          <label className='checkmark-container' htmlFor='checkbox'>
            <input
              id='checkbox'
              type='checkbox'
              name='checkbox'
              value={keepLogging.toString()}
              onChange={() => setKeepLogging((prev) => !prev)}
            />
            Keep me signed in
          </label>
        </div>
        <Button
          type='submit'
          label='Login'
          className='auth-button button'
          disabled={!username || !password}
        />
        <Link to='/forgot-password'>
          <span className='forgot-password'>
            Forgot password? <FaArrowRight />
          </span>
        </Link>
      </form>
    </div>
  );
}
