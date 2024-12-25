const axios = require('axios');

async function fetchApplicationData() {
     const apiUrl = 'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';
     try {
          const response = await axios.get(apiUrl);
          return response.data;
     } catch (error) {
          console.error('Error fetching application data:', error);
          throw new Error('Failed to fetch application data.');
     }
}

module.exports = { fetchApplicationData };