/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["app"],
  },
  images: {
    domains: ["img.icons8.com","lh3.googleusercontent.com","api.dicebear.com"],
  },
  env: {
    API_KEY: "AIzaSyD2D0hvG9CnD30cR4p_tmeT-0vDuVbBaOQ",
    AUTH_DOMAIN: "uni-trading.firebaseapp.com",
    PROJEDT_ID: "uni-trading",
    STORAGE_BUCKET: "uni-trading.appspot.com",
    MESSAGING_SENDER_ID: "447459518433",
    APP_ID: "1:447459518433:web:dde873b52446d47ebc14a0",
    MEASUREMENT_ID: "G-0WFE7SGFVN",
  },
};

module.exports = nextConfig;
