import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"


function Authentication({updateUser, updateUsers}) {
    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        name: yup.string().required("USERNAME REQUIRED"),
        email: yup.string().email(),
        password: yup.string().required("PASSWORD REQUIRED")
    })

    
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
          if (signUp){
            fetch('/users', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"                    
                },
                body: JSON.stringify(values)
            })
            .then(r => r.json())
            .then(user => {
                updateUsers(user)
                updateUser(user)
                history.push('/login')
            })
          }
          else {
            fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"                    
                },
                body: JSON.stringify(values)
            })
            .then(r => r.json())
            .then(user => {
                updateUser(user)
                history.push('/store')
            })
          }

        }
    })



 
    return (
        <> 
          {Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}
          <h2>Please Log in or Sign up!</h2>
          <h2>{signUp?'Already a member?':'Not a member?'}</h2>
          <button onClick={handleClick}>{signUp?'Log In!':'Register now!'}</button>
          <Form onSubmit={formik.handleSubmit}>
            <label>
              Name
            </label>
            <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
            {signUp && (
              <>
              <label>
                Email
              </label>
              <input type='text' name='email' value={formik.values.email} onChange={formik.handleChange} />
              </>
            )}
            <>
            <label>
              Password
            </label>
            <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} />
            </>
            <input type='submit' value={signUp?'Sign Up!':'Log In!'} onSubmit={Object.values(formik.errors).map(error => <h2 style={{color:'red'}}> {error}</h2>)}/>
          </Form>
        </>
    )
}

export default Authentication

export const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:#42ddf5;
  color: white;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`
