// src/config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    // En una app real, aquí guardarías el 'profile' en tu Base de Datos
    return done(null, profile);
  }
));

// Serialización para mantener la sesión activa en el navegador
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));