import React, {useEffect, useState} from 'react'
import Validation from './Validation'

function Signup({submitForm,setSignUp}) {
  const [values, setValues] = useState({
    fullname:'',
    email:'',
    password:'',
    confirmPassword:'',
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange=(event)=>{
      setValues({
          ...values,
      [event.target.name]: event.target.value
      })
  }
  const handleFormSubmit = (event) =>{
      event.preventDefault();
      setErrors(Validation(values));
      setDataIsCorrect(true);
      //setSignUp(true);
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0 && dataIsCorrect) {
        setSignUp(true);
      }

  }, [errors])

  return (

    <div className='container'>
         <div className='app-wrapper'>
             <div>
                 <h2 className='title'> Create Account</h2>
             </div>
         <form className='form-wrapper'>
             <div className='name'>
                 <label className='label'>Full Name</label>
                 <input className='input' type='text' name='fullname' value={values.fullname} onChange={handleChange}/>

                {errors.fullname && <p className='error'>{errors.fullname}</p>}
            </div>
            <div className='email'>
                <label className='label'>Wits Email</label>
                <input className='input' type='email' name='email' value={values.email} onChange={handleChange}/>

                {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
                <label className='label'>Password</label>
                <input className='input' type='password' name='password' value={values.password} onChange={handleChange}/>

                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className='password'>
                <label className='label'>Confirm Password</label>
                <input className='input' type='password' name='confirmPassword' value={values.confirmPassword} onChange={handleChange}/>

                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </div>
            <div>
                <button className='submit' onClick={handleFormSubmit}>Sign Up</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup
