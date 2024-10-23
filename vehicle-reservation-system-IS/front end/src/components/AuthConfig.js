// src/AuthConfig.js
// src/AuthConfig.js
export const asgardeoConfig = {
  signInRedirectURL: "http://localhost:8080/login/oauth2/code/asgardeo",  // React route for OAuth2 callback
  signOutRedirectURL: "http://localhost:8080",
  clientID: "dqmoENiYhITnl4ay54IpE0Rq7jYa",  
  baseUrl: "https://api.asgardeo.io/t/org7h0ju",  
  scope: ["openid", "profile", "email"]  // (Add "email" if needed)
};

  
  