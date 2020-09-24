import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = {
         name: displayName,
          email: email,
          isLoggedIn:true,
         };
      setLoggedInUser(signedInUser);
      console.log(signedInUser);
      history.replace(from);
    }).catch(function (error) {
    });
  }

  const handleFbSignIn = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email };
      setLoggedInUser(signedInUser);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  return (
    <div className="row ">
      <div className="col-md-3"></div>
      <div className="col-md-6 bg-dark">
      <div className="text-center text-white ">
      {newUser ? <h2 >Create an account</h2> : <h2>Log In</h2>}
      </div>
      <MDBContainer>
        {newUser ? 
        <> 
          <MDBInput
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            required
          />
          <MDBInput
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            required
          />
          <MDBInput
            label="Confirm your email"
            icon="exclamation-triangle"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            required
          />
          <MDBInput
            label="Your password"
            icon="lock"
            group
            type="password"
            validate
            required
          />
        </>
        : <> 
          <MDBInput
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            required
          />
  
          <MDBInput
            label="Your password"
            icon="lock"
            group
            type="password"
            validate
            required
          />
        </>
        }
        <MDBBtn className="w-100" color="cyan" type="submit">
                        {newUser ? 'Create New Account' : 'Log In'}
                    </MDBBtn>
        </MDBContainer>
        <div className="text-center text-white">
        {   newUser ?
          <> <span>Already have an account?</span> <button className="button" type="button"  onClick={() => setNewUser(!newUser)}>Login</button> </>
                    :  <> <span>Need an account?</span> <button className="button" type="button"  onClick={() => setNewUser(!newUser)}>Create an account</button> </>
                    }
                    <br/>
          <button onClick={handleGoogleSignIn} className="btn btn-lg bg-success text-white">
            Sign in with Google
                         </button>
        </div>
        <div className="text-center ">
          <button onClick={handleFbSignIn} className="btn btn-lg bg-primary text-white">
            Sign in with Facebook
                         </button>
        </div>
      </div>
      <div className="col-md-3 text-center">

      </div>
    </div>
  );
};

export default Login;