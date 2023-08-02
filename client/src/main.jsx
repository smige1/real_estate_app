import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-3hdttktokznrl4gr.us.auth0.com"
     clientId="VWDgHZBv8C8GkkpKg83XUgaTulluzqYu"
     authorizationParams={{
      redirect_uri: "https://real-estate-app-4qjn.vercel.app/"
     }}
     audience="https://real-estate-app-rej5.vercel.app/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
