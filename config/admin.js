module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ca5dce480ad0ca4e9707d961d20628b'),
  },
});
