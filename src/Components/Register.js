import React, { useState } from 'react';
import backgroundLogin from '../Assets/backgroundlogin.jpg';
import logoLogin from '../Assets/science.png';
import logoUser from '../Assets/userlogin.png';
import logoPass from '../Assets/padlock.png';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [existingUser, setExistingUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra tài khoản đã tồn tại hay không
    // Đây là một giả định đơn giản, bạn cần thay thế bằng kiểm tra từ server hoặc cơ sở dữ liệu thực tế
    if (existingUser === formData.username) {
      alert('Tài khoản đã được đăng ký');
      return;
    }

    // Kiểm tra mật khẩu có đúng định dạng hay không
    if (
      formData.password.length < 8 ||
      formData.password.length > 16 ||
      !/[a-z]/.test(formData.password) ||
      !/[A-Z]/.test(formData.password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
    ) {
      alert('Mật khẩu không đúng định dạng');
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== formData.confirmPassword) {
      alert('Xác nhận mật khẩu không khớp');
      return;
    }

    // Gửi dữ liệu đăng ký đến server hoặc xử lý tùy ý
    console.log('Đăng ký thành công:', formData);

    // Cập nhật tài khoản đã đăng ký
    setExistingUser(formData.username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='page-regis'>

      <div className='row '>
        <div className='col-7'>
        <div className='col-img-regis'>
                <img src={backgroundLogin}/>

                
                </div>
        </div>
      <div className='col-5 c5-regis'>
<div className='col-regis'>
<div className='title-regis'>
            <img src={logoLogin}/>
                Register
                </div>
      <div className='user-regis'>
      <img src={logoUser}/>
        <input
          type="text"
          name="username"
          placeholder='Name'
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className='pass-regis'>
      <img src={logoPass}/>
        <input
          type="password"
          name="password"
          placeholder='Password'

          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className='pass-regis'>

      <img src={logoPass}/>
        <input
          type="password"
          placeholder='ConfirmPassword'
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Đăng ký</button>
</div>
      </div>
      </div>
      </div>

      
    </form>
  );
};

export default Register;
