import React, {Fragment} from 'react'
import Link from 'next/link'

const accountOverview = (props) => {
    return (
        <Fragment>
        <div id="account-overview-block" class="account-overview">
        <div class="account-header">
          <h2>{props.title}</h2>
          <div class="active-cards">
            <div data-bind="activeCardsCount">0</div>
            <div data-bind="activeCardsText">{props.activeCards}</div>
          </div>
        </div>
        <div>
          <div class="image-wrapper">
            {/* <img data-attr="src:brandCardImgSrc" alt="card-logo-img" />
            <img data-attr="src:brandCardImgSrc" alt="card-logo-img" /> */}
          </div>
          <div class="card-info-mobile">
            <p>{props.currentBalance}</p>
            <p class="small-currency-decimal" data-bind="formattedCurrentBalance">$0.00</p>
          </div>
          <hr />
          <h3>{props.currentBalance}</h3>
          <h4 class="small-currency-decimal" data-bind="formattedCurrentBalance">$0.00</h4>
          <div id="available-credit-progress">
            {/* {{< progressBar >}} */}
          </div>
    
          <Link href="/cards/" id="manageCard" class="btn-primary">Manage Cards</Link>
        </div>
      </div>
      </Fragment>
    )
}
export default accountOverview