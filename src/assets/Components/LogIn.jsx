import React, { useState } from 'react';

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !username || !password || !/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(username);

  return (
    <div className='login-container'>
      <form>
        <h1>Login</h1>
        
        <div className="p-3 w-100">
          <div className="col-12 mb-3">
            <input
              type='text'
              placeholder='E-mail'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <button type='submit' disabled={isDisabled} className={isDisabled ? 'disabled' : ''}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LogIn;