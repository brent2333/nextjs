import nc from 'next-connect'
import transData from '../../../public/transactions.json'
const data = [];
transData.forEach(card => {
  data.push(
    {
      status:card.Status,
      details: card.Card.Alias + ' ' + card.Card.LastFour,
      transLoc: card.Payee.address.city,
      locationdatetime: 'MM/DD/YYYY'
    }
  )
})
const handler = nc()
  .get((req, res) => {
    res.json({data: data})
  })

export default handler