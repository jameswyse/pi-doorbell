module.exports = {
  db: {
    $filter: 'env',

    $default: {
      address: '10.0.0.146:27017/pi-doorbell',
      collection: 'tasks'
    },

    production: {
      address: '10.0.0.146:27017/pi-doorbell',
      collection: 'tasks'
    }
  }
};
