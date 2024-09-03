import PropTypes from 'prop-types';

function UserGreeting(props) {

  const welcome =  <h2 className="welcome-message">Welcome {props.username}</h2>
  const login =   <h2 className="login-prompt">please log in to continue</h2>
  
  return (props.isLogin ? welcome : login);
  
  
  
//   if (props.isLogin) {
//       return <h2 className="welcome-message">Welcome {props.username}</h2>
//   }
//   return <h2 className="login-prompt">please log in to continue</h2>

}

UserGreeting.propTypes = {
    isLogin: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLogin : false,
    username: "Guest",
}

export default UserGreeting;