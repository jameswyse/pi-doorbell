module.exports = {
  plugins: {
    'mongo': {
      $filter: 'env',
      development: {
        module: 'modella-mongo',
        options: '10.0.0.146:27017/pi-doorbell'
      },
      production: {
        module: 'modella-mongo',
        options: '10.0.0.146:27017/pi-doorbell'
      }
    }
  }
};
