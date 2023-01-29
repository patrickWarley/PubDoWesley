import React, { useState } from 'react';
import './style.css';

function MockLogIn() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const isDisabled = !username || !password || !/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(username);

return (
<div className='login-container'>
<form>
<h1>Login</h1>
<input
type='text'
placeholder='E-mail'
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type='password'
placeholder='Senha'
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button type='submit' disabled={isDisabled} className={isDisabled ? 'disabled' : ''}>
Entrar
</button>
</form>
</div>
);
}

export default MockLogIn;