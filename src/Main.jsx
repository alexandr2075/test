import React from "react";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Main = (props) => {

  const history = useHistory();

  let onLoginInput = (e) => {
    let body = e.target.value
    props.onLogin(body)
  }

  let onPasswordInput = (e) => {
    let body = e.target.value
    props.onPassword(body)
  }

  return (

    <div>
      <div>
        <input onChange={onLoginInput} placeholder={'Login'} value={props.login}/>
      </div>
      <div>
        <input onChange={onPasswordInput} placeholder={'Password'} value={props.password}/>
      </div>
      <div>
        <button disabled={!(props.login === 'developer21' && props.password === '123456')} onClick={() => history.push("/profile")}
        >Войти</button>
      </div>
    </div>
  )
}

let mapStateToProps = (state) => {

  return {
    login: state.login,
    password: state.password
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (body) => {
      dispatch({ type: 'INPUT_LOGIN', vid: body })
    },
    onPassword: (body) => {
      dispatch({ type: 'INPUT_PASSWORD', vid: body })
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

