import nc from 'next-connect'
import cards from '../../../public/cards.json'
const UIStatus = {
    ACTIVE: "active",
    EXPIRED: "expired",
    HOLD: "hold",
    BLOCKED: "blocked",
    PENDING: "pending",
    OTHER: "other"
  };
const statusMap =  {
    A: UIStatus.ACTIVE,
    "A/R REASON": UIStatus.HOLD,
    CLOSED: UIStatus.HOLD,
    CONVERTED: UIStatus.HOLD,
    CUST: UIStatus.BLOCKED,
    DAMAGED: UIStatus.BLOCKED,
    DESTROYED: UIStatus.HOLD,
    DRAGNET: UIStatus.HOLD,
    EXPIRED: UIStatus.HOLD,
    FRAUD: UIStatus.BLOCKED,
    INACTIVE: UIStatus.HOLD,
    INACTIVITY: UIStatus.HOLD,
    LOST: UIStatus.BLOCKED,
    "LOST/STOLEN": UIStatus.HOLD,
    OTHER: UIStatus.HOLD,
    PENDING: UIStatus.PENDING,
    Replace: UIStatus.BLOCKED,
    REPLACED: UIStatus.BLOCKED,
    SERVICING: UIStatus.HOLD,
    SOLD: UIStatus.HOLD,
    SPARE: UIStatus.HOLD,
    STOLEN: UIStatus.HOLD,
    "SUSP-AUTH": UIStatus.HOLD,
    SUSPECT: UIStatus.BLOCKED,
    T: UIStatus.HOLD,
    TERMINATED: UIStatus.HOLD,
    TRANSFER: UIStatus.HOLD,
    TURNED_ON: UIStatus.ACTIVE,
    TURNED_OFF: UIStatus.HOLD,
    VEHICLE: UIStatus.HOLD,
    "VEHICLE SOLD": UIStatus.HOLD,
    "Wrong PIN": UIStatus.BLOCKED
  };


cards.map(card => {
    card.Status = statusMap[card.Status]
    card.Card = card.Title + ' ' + card.LastFour
    card.Fleet = 'VILLAGE OF HOLMEN POLICE DEPT 608721'
    card.VehicleID = card.Alias
    card.Profile = card.ProfileName
    card.LastUsed = card.LastUpdatedDate.split('T')[0]
    card.CardType = card.cardType.title
})
const handler = nc()
  .get((req, res) => {
    res.json({data: cards})
  })

export default handler