const axios = require('axios');
const xml2js = require('xml2js');
require('dotenv').config();

async function fetchSeoulJobs() {
  const API_URL = `http://openapi.seoul.go.kr:8088/${process.env.SEOUL_API_KEY}/xml/GetJobInfo/1/1000/`;
  
  const { data } = await axios.get(API_URL, { responseType: 'text' });
  const parser = new xml2js.Parser({ explicitArray: false });
  const parsed = await parser.parseStringPromise(data);

  return parsed.GetJobInfo.row;
}

module.exports = fetchSeoulJobs;
