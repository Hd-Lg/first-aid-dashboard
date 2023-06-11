import './Login.css';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Login = () => {
  const inputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [hasText, setHasText] = useState(false);

  const handleInputFocus = (isFocused, ref) => {
    const translateY = isFocused || hasText ? -25 : 0;
    gsap.to(ref.current, { y: translateY, duration: 0.3 });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setHasText(inputValue !== '');
  };

  // a11n function
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current.focus();
    }
  };
  return (
    <div>
      {/* ANIMATION SECTION */}
      <section></section>
      {/* LOGIN SECTION */}
      <section>
        <div>
          <h1>ResQHub</h1>
          <h2>Empowering First-Aid Management and Beyond</h2>
        </div>

        <form>
          {/* EMAIL */}
          <div>
            <label
              ref={emailInputRef}
              htmlFor='emailField'
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className={`placeholder ${hasText ? 'active' : ''}`}
            >
              Email
            </label>
            <input
              ref={inputRef}
              type='email'
              id='emailField'
              onFocus={() => handleInputFocus(true, emailInputRef)}
              onBlur={() => handleInputFocus(false, emailInputRef)}
              onChange={handleInputChange}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              ref={passwordInputRef}
              htmlFor='passwordField'
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className={`placeholder ${hasText ? 'active' : ''}`}
            >
              Password
            </label>
            <input
              ref={inputRef}
              type='password'
              id='passwordField'
              onFocus={() => handleInputFocus(true, passwordInputRef)}
              onBlur={() => handleInputFocus(false, passwordInputRef)}
              onChange={handleInputChange}
            />
          </div>

          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
