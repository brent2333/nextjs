import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Home = () => {
  return (
    <div id="content-wrap">
    <div className="container dashboard">
    <div className="heading">
      <h1 >Dashboard</h1>
      </div>
      <div id="account-overview-block" className="account-overview">
    <div className="account-header">
      <h2>Account Overview</h2>
      <div className="active-cards">
        <div data-bind="activeCardsCount">2</div>
        <div data-bind="activeCardsText">Active cards</div>
      </div>
    </div>
    <div>
      <div className="image-wrapper">
        {/* <img data-attr="src:brandCardImgSrc" alt="card-logo-img" src="/img/arco_many.4c19f266531f1f07a00921c122ff47ef4e15fb7705a4aa0f6f7ec0fa3222ed0a.svg">
        <img data-attr="src:brandCardImgSrc" alt="card-logo-img" src="/img/arco_many.4c19f266531f1f07a00921c122ff47ef4e15fb7705a4aa0f6f7ec0fa3222ed0a.svg"> */}
      </div>
      <div className="card-info-mobile">
        <p>Current balance</p>
        <p className="small-currency-decimal" data-bind="formattedCurrentBalance"><span>$0</span><span className="small-decimal">.00</span></p>
      </div>
      <h3>Current balance</h3>
      <h4 className="small-currency-decimal" data-bind="formattedCurrentBalance"><span>$0</span><span className="small-decimal">.00</span></h4>
      <div id="available-credit-progress">
        

{/* <div className="progress-bar-wrap">
  <div className="progress-bar-graph ">
    <div className="progress-bar" style="width: 0%;"><div className="progress-bar-tooltip"></div></div>
  </div>
  <div className="progress-bar-text">Available Credit: <br> $7,500.00 of $7,500.00</div>
</div> */}
      </div>

      {/* <a href="/cards/" id="manageCard" className="btn-primary">Manage Cards</a> */}
      <Link href="/cards/"className="btn-primary">Manage Cards</Link>

    </div>
  </div>
  <div className="recent-activity">recent-activity</div>
  <div id="payment-info-block" className="info-block">payment-info-block</div>
  <div className="card-block">card-block</div>
  <div id="spend-overview-block" className="account-view">spend-overview-block</div>
      </div>
      </div>
  )
}
export default Home;
