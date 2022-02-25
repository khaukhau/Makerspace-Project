module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url: 'https://makerspaces-dashboard.vinmaker.org',
});

