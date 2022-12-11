import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import { authService } from '@/services/api/auth/auth.service';
import { Utils } from '@/services/utils/utils.service';
import useLocalStorage from '@/hooks/useLocalStorage';
import useSessionStorage from '@/hooks/useSessionStorage';
import './Register.scss';

export default function Register(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [alertType, setAlertType] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [setStoreUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoggedin', 'set');
  const [pageReload] = useSessionStorage('pageReload', 'set');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading && !user) {
    } else if (user) {
      setIsLoading(false);
      navigate('/app/social/streams');
    }
  }, [isLoading, user, navigate]);

  const registerUser: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const avatarColor = Utils.getRamdomAvatarColor();
      const avatarImage = Utils.generateAvatar(
        username.charAt(0).toUpperCase(),
        avatarColor,
      );
      const result = await authService.singUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage,
      });
      setLoggedIn(true);
      setStoreUsername(username);
      setHasError(false);
      setAlertType('alert-success');
      Utils.dispatchUser(result, pageReload, dispatch, setUser);
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
      <form className='auth-form' onSubmit={registerUser}>
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
            id='email'
            name='email'
            type='email'
            value={email}
            placeholder='Email'
            label='Email'
            handleChange={(e) => setEmail(e.target.value)}
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
            <input id='checkbox' type='checkbox' name='checkbox' />
            Keep me signed in
          </label>
        </div>
        <Button
          type='submit'
          label={isLoading ? 'Loading' : 'Register'}
          className='auth-button button'
          disabled={isLoading || !username || !email || !password}
        />
        <span className='forgot-password'>
          Forgot password? <FaArrowRight />
        </span>
      </form>
    </div>
  );
}
