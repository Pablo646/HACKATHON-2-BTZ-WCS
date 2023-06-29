import { Link } from 'react-router-dom'
import './Login.css'
import React, {useState} from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
const Login = () => {
  const [form, setForm] = useState({email : "", password: ""});
  const [error, setError] = useState(false);
  const formChanges = (e) =>{
      setForm({ ...form, [e.target.name] : e.target.value })
  };
  const formSending = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5080/api/users/login', form)
        .then((res) => {
            console.log(res.data);
            setError(false);
        })
        .catch((error) => {
            console.log(error);
            setError(true);
        });
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

  return (
  <div>
    <Navbar />
    <div className='login'>
       <div className="left_container">
           <div className="login_container">
            </div>
                <form className="login_form" action="" onSubmit={formSending} onChange={formChanges}>
                    <input type="text" id="email" name="email" placeholder="Email" required/>
                    <input type="text" id="password" name="password" placeholder="Password" required/>
                    {error? <p className='login_error'>Email ou mot de passe invalide</p> : null}
                    <Link to="#"><p className="forgotten_password">Mot de passe oublié</p></Link>
                    <button type='submit'>Connectez-vous</button>
                </form>
            </div>
      </div>
      <Footer />
    </div>
      
    
  )
}

export default Login;