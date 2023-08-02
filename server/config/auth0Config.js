import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://real-estate-app-rej5.vercel.app",
    issuerBaseURL: "dev-3hdttktokznrl4gr.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck