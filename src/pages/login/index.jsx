import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../stores/login/functions'

import { BtnForgotPasswordLogin, CardLogin, LoginContainer } from './styles'

function LoginPage() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onClickLogin = (e) => {
    e.preventDefault()
    login(dispatch, {
        email: email, 
        password: password,
    }, history)
  }

  return (
    <LoginContainer>
      
      <CardLogin>
        <div style={{padding: '18px'}}>
          <div className="row">
            <div className="col-12 text-primary">
              <h1 className='text-center font-48'>AssetData<span className='font-24'>.io</span></h1>
            </div>
          </div>
          
          <form>
            <div className="mb-3">
              <label for="inputEmailLogin" className="form-label">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Masukan Email" type="email" className="form-control" id="inputEmailLogin" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Masukan Password" type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
          </form>

          <div className="row my-2 mt-3">
            <div className="col-12 py-1">
              <button className="btn btn-primary w-100" onClick={onClickLogin}>
                Sign In
              </button>
            </div>
            <div className="col-12 py-1">
              <BtnForgotPasswordLogin className="btn w-100">
                Forgot Password
              </BtnForgotPasswordLogin>
            </div>
          </div>


        </div>
      </CardLogin>

    </LoginContainer>
  )
}



export default LoginPage