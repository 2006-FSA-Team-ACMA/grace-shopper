import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' ? (
          <div>
            <div>
              <div>
                <label htmlFor="firstName">
                  <small className="title">First Name</small>
                </label>
                <input className="title" name="firstName" type="text" />
              </div>
              <div>
                <label htmlFor="lastName">
                  <small className="title">Last Name</small>
                </label>
                <input className="title" name="lastName" type="text" />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div>
          <label htmlFor="email">
            <small className="title">Email</small>
          </label>
          <input className="title" name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small className="title">Password</small>
          </label>
          <input className="title" name="password" type="password" />
        </div>
        <div>
          <button className="title" type="submit">
            {displayName}
          </button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      if (formName === 'signup') {
        const user = {
          firstName: evt.target.firstName.value,
          lastName: evt.target.lastName.value,
          email: evt.target.email.value,
          password: evt.target.password.value
        }
        dispatch(auth(user, formName))
      } else {
        const user = {
          email: evt.target.email.value,
          password: evt.target.password.value
        }
        dispatch(auth(user, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
