module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '394f1b2e0bf8f7cef0744e198b326b00'),
  },
});
