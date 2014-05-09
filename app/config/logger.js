module.exports = {
  extendedRequests: true,
  opsInterval: 60 * 1000,
  subscribers: {
    'console':   ['ops', 'request', 'log', 'error']
  }
};
