import React, {input} from 'react'
const ButtonWrapper = () => {

return (
<div className="button-wrapper">
    <section className="top-summary-wrap hidden-mobile">
      <div className="multiAccountCurrentBalance">
        <h4>Current balance:</h4>
        <p className="currency currencyBalance">$235.71</p>
      </div>
      <div>
        <h4>Showing in this view:</h4>
        <div>
          <p className="totalAccounts"><span className="counts">1 </span> Account </p>
          <p className="totalFleets"><span className="counts">1 </span> Fleet </p>
          <p className="total-cards"><span className="counts">0</span> Cards</p>
        </div>
      </div>
      <div>
        <h4>Date range:</h4>
        <div><button className="btn-regular top-date-range" data-bind="dateRange">03/05/2022 - 04/04/2022</button></div>
      </div>
    </section>
    <ul className="table-button-wrap">
      <li className="search-slide-wrap">
        <span className="circle-icon search-slide"></span>
        <input type="text" id="fSearch" name="fSearch" placeholder="Search" autocomplete="off"></input>
      </li>
      <li className="circle-icon date-range-slide"></li>
      <li className="circle-icon filter-slide"></li>
      <li className="circle-icon list-grid-view-link hidden" data-target-page="activity-spend"></li>
      <li className="circle-icon download-link disabled"><a href="javascript:;">&nbsp;</a></li>
    </ul>
  </div>
  )
  }
  export default ButtonWrapper