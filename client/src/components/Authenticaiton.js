import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import { useFormik } from "formik"
import * as yup from "yup"


function Authentication({updateUser}) {
    const [signUp, setSignUp] = useState(false)
    const history = useHistory()

    const handleClick = () => setSignUp((signUp) => !signUp)

    const formSchema = yup.object().shape({
        name: yup.string().required("please enter a username"),
        email: yup.string().email()
    })

    // const formik = useFormik({
    //     initialValues:{
    //         name:"",
    //         email:""
    //     },
    //     validationSchema: formSchema
    // })

 
    return (
        <> 
        <h2>Please Log in or Sign up!</h2>
        <h2>{signUp?'Already a member?':'Not a member?'}</h2>
        <button onClick={handleClick}>{signUp?'Log In!':'Register now!'}</button>
        <Form onSubmit={console.log}>
        <label>
          Username
          </label>
        <input type='text' name='name' value={'name'} onChange={console.log} />
        {signUp&&(
          <>
          <label>
          Email
          </label>
          <input type='text' name='email' value={'email'} onChange={console.log} />
          </>
        )}
        <input type='submit' value={signUp?'Sign Up!':'Log In!'} />
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





 
//     return (
//         <> 
//         <h2 style={{color:'red'}}> {'Errors Here!!'}</h2>
//         <h2>Please Log in or Sign up!</h2>
//         <h2>{signUp?'Already a member?':'Not a member?'}</h2>
//         <button onClick={handleClick}>{signUp?'Log In!':'Register now!'}</button>
//         <Form onSubmit={console.log}>
//         <label>
//           Username
//           </label>
//         <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
//         {signUp&&(
//           <>
//           <label>
//           Password
//           </label>
//           <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} />
//           </>
//         )}
//         <input type='submit' value={signUp?'Sign Up!':'Log In!'} />
//       </Form>
//         </>
//     )
// }