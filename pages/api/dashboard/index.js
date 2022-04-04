import nc from 'next-connect'
import dashData from '../../../public/dashboard.json'
const transactions = dashData.transactions;
const handler = nc()
  .get((req, res) => {
    res.json({data: transactions})
  })

export default handler