const express = require('express')
const router = express.Router()

// seed data (could be from DB)
const NEWS = [
  { id: 1, title_en: 'Sample News', title_ar: 'خبر تجريبي', body_en: 'This is a sample news.', body_ar: 'هذا خبر تجريبي.' }
]

router.get('/', (req, res) => {
  res.json(NEWS)
})

router.get('/:id', (req, res) => {
  const item = NEWS.find(n => n.id === parseInt(req.params.id))
  if(!item) return res.status(404).json({error: 'Not found'})
  res.json(item)
})

module.exports = router
