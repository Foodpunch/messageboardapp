// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";

// Configuration for Cognito authentication
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_SvnHJsXU8",  // Your Cognito User Pool URL
  client_id: "612skohq3agr8p0ih529u6abe2",  // Your Cognito App Client ID
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",  // Your Redirect URI
  response_type: "code",  // Authorization Code flow
  scope: "email openid phone",  // Scopes needed by your app
  onSigninCallback: (window) => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap your entire app with the AuthProvider to handle authentication
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
