import React from "react";
import GoogleLogin from "react-google-login";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>
      <GoogleLogin
    clientId="951041547935-lj8q1ko19kiasi2gu7food40k3c38tcv.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
