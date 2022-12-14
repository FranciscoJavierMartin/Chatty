import { JSXElementConstructor, ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';
import AuthTabs from '@/pages/auth/auth-tabs/AuthTabs';
import ForgotPassword from '@/pages/auth/forgot-password/ForgotPassword';
import ResetPassword from '@/pages/auth/reset-password/ResetPassword';
import Streams from '@/pages/social/streams/Streams';

export default function AppRouter(): ReactElement<
  any,
  string | JSXElementConstructor<any>
> | null {
  const elements = useRoutes([
    {
      path: '',
      element: <AuthTabs />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/app/social/streams',
      element: <Streams />,
    },
  ]);

  return elements;
}
