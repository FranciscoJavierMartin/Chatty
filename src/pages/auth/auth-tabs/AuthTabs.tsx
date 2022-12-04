import { useState } from 'react';
import './AuthTabs.scss';
import backgroundImage from '../../../assets/images/background.jpg';

export default function AuthTabs(): JSX.Element {
  const [type, setType] = useState<'Sign In' | 'Sign Up'>('Sign In');

  return (
    <>
      <div
        className="container-wrapper"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="environment">DEV</div>
        <div className="container-wrapper-auth">
          <div className="tabs">
            <div className="tabs-auth">
              <ul className="tab-group">
                <li className="tab active" onClick={() => setType('Sign In')}>
                  <button className="login">Sign In</button>
                </li>
                <li className="tab" onClick={() => setType('Sign Up')}>
                  <button className="signup">Sign Up</button>
                </li>
              </ul>
              {type === 'Sign In' ? (
                <div className="tab-item">login component</div>
              ) : (
                <div className="tab-item">register component</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
