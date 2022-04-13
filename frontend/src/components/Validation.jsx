const Validation = (values) => {

    let errors={}

    if(!values.fullname){
        errors.fullname='Name Is Required.'
    }
    if(!values.email){
        errors.email='Email Is Required.'
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email Is Invalid."
    }
    if(!values.password){
        errors.password='Password Is Required.'
    }else if(values.password.length < 6){
        errors.password="Password Must Be 6 Or More Characters"
    }
    if(!values.confirmPassword){
        errors.confirmPassword='You Need To Confirm Your Password.'
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword="Passwords Don't Match"
    }
    
  return (errors)
}

export default Validation