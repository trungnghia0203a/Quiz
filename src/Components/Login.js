import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoLogin from '../Assets/science.png';
import logoUser from '../Assets/userlogin.png';
import logoPass from '../Assets/padlock.png';
import backgroundLogin from '../Assets/backgroundlogin.jpg';


const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kiểm tra tài khoản và mật khẩu
    const isValidUser = username === 'admin' && password === '1';

    if (isValidUser) {
      // Tài khoản hợp lệ
      setLoggedIn(true);
      navigate('/quiz');
    } else {
      // Tài khoản không hợp lệ
      alert('Tài khoản không tồn tại hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className='login-page'>
        <div className='row row-login'>
            <div className='col-5 col5-bg'>
                <div className='col-login'>

            <div className='title-login'>
            <img src={logoLogin}/>
                Login
                </div>
                <div style={{margin:'auto', width:'400px', marginBottom:'10px', fontSize:'20px'}}>Sign into your account</div>
            <div className='user-login'>
            <img src={logoUser}/>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='pass-login'>
            <img src={logoPass}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
                <button onClick={handleLogin}>Login</button>
                <div className='link-register'>
                  <Link to={'/register'}>Don't have an account? Register here</Link>
                </div>
                </div>
            </div>
            <div className='col-7'>
                <div className='col-img-login'>
                <img src={backgroundLogin}/>

                
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Login;
