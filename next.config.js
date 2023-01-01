const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'seraj',
        mongodb_password: 'yjSXpR0So4iPkj6y',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'seraj',
      mongodb_password: 'yjSXpR0So4iPkj6y',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};

module.exports = nextConfig;
