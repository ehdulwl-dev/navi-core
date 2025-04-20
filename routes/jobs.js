const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// 전체 채용 공고 조회
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('TB_JOBS')
    .select('*')
    .order('reg_date', { ascending: false }); // 최근 등록일 순으로 정렬

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

module.exports = router;
