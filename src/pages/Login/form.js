import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InputField, PasswordField, Button } from '../../components'
import { userLogin } from '../../utils';

const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const response = userLogin(email, password);
        if(response.id){
            const user = response;
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/");
        } else {
            alert(response.message);
        }
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

  return (
    <div className='flex flex-col gap-4'>
      <InputField
        name="email"
        value={email}
        setValue={handleEmail}
        placeholder={"Enter your email"}
      />
      <PasswordField 
        name="password"
        value={password}
        setValue={handlePassword}
        placeholder={"Enter your password"}
      />
      <Button 
        placeholder="Login"
        handler={handleLogin}
      />
    </div>
  )
}

export default Form
