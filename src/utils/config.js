const oktaAuthConfig = {
    issuer: 'https://dev-47320799.okta.com/oauth2/default',
    clientId: '0oa18pur7kaJyDTRn5d7',
    redirectUri: window.location.origin + '/login/callback',
    //pkce: false,
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-47320799.okta.com',
    clientId: '0oa18pur7kaJyDTRn5d7',
    redirectUri: window.location.origin + '/login/callback',
    authParams: {
        //pkce: false
    }
};

export { oktaAuthConfig, oktaSignInConfig };