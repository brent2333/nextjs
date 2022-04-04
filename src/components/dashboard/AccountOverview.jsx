import React, {Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const accountOverview = (props) => {
    return (
        <Fragment>
        <div id="account-overview-block" className="account-overview">
        <div className="account-header">
          <h2>{props.title}</h2>
          <div className="active-cards">
            <div data-bind="activeCardsCount">{props.activeCards}</div>
            <div data-bind="activeCardsText">Active cards</div>
          </div>
        </div>
        <div>
          <div className="image-wrapper">
          <Image src="/img/kwiktrip.png"  width={340} height={216} />
          </div>
          <hr />
          <h3>Current Balance</h3>
          <h4 className="small-currency-decimal" data-bind="formattedCurrentBalance">{props.currentBalance}</h4>
          <div id="available-credit-progress">
            {/* {{< progressBar >}} */}
          </div>
          <div className="btn-primary">
          <Link href="/cards/">Manage Cards</Link>
          </div>
        </div>
      </div>
      </Fragment>
    )
}
export default accountOverview