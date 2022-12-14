import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import { setUserLoginAction } from "../../redux/reducers/userReducer";
import {
  ACCESS_TOKEN,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";
import { history } from "../../index";
export default function LoginFacebook() {
  const dispatch = useDispatch();
  const responseFacebook = async (response) => {
    try {
      
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
        method: "POST",
        data: {
          facebookToken: response.accessToken,
        },
      });

      let action = setUserLoginAction(result.data.content);
      dispatch(action);
      setStoreJSON(USER_LOGIN, result.data.content);


      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FacebookLogin
      appId="660859068593690"
      fields="name,email,picture"
      render={(renderProps) => (
        <button
          className="facebook-login-btn mt-3"
          onClick={renderProps.onClick}
        >
          <i className="fab fa-facebook-f"></i>
          <span>Continue with Facebook</span>
        </button>
      )}
      callback={responseFacebook}
    />
  );
}
