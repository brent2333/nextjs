import nc from 'next-connect'

const handler = nc()
  .post((req, res) => {
    res.json({data: req.body})
  })

export default handler