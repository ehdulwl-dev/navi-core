const cron = require('node-cron');
const fetchSeoulJobs = require('./jobFetcher');
const upsertJobs = require('./jobService');

cron.schedule('0 1 * * *', async () => {
  console.log('[CRON] 새벽 1시: 서울시 채용정보 수집 시작');
  try {
    const jobs = await fetchSeoulJobs();
    await upsertJobs(Array.isArray(jobs) ? jobs : [jobs]);
  } catch (err) {
    console.error('[CRON] 에러 발생:', err.message);
  }
});
