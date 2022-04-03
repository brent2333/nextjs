import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="content-wrap">
    <div className="container dashboard">
    <div className="heading">
      <h1 >Dashboard</h1>
      </div>
      <div id="account-overview-block" class="account-overview">
    <div class="account-header">
      <h2>Account Overview</h2>
      <div class="active-cards">
        <div data-bind="activeCardsCount">2</div>
        <div data-bind="activeCardsText">Active cards</div>
      </div>
    </div>
    <div>
      <div class="image-wrapper">
        {/* <img data-attr="src:brandCardImgSrc" alt="card-logo-img" src="/img/arco_many.4c19f266531f1f07a00921c122ff47ef4e15fb7705a4aa0f6f7ec0fa3222ed0a.svg">
        <img data-attr="src:brandCardImgSrc" alt="card-logo-img" src="/img/arco_many.4c19f266531f1f07a00921c122ff47ef4e15fb7705a4aa0f6f7ec0fa3222ed0a.svg"> */}
      </div>
      <div class="card-info-mobile">
        <p>Current balance</p>
        <p class="small-currency-decimal" data-bind="formattedCurrentBalance"><span>$0</span><span class="small-decimal">.00</span></p>
      </div>
      <h3>Current balance</h3>
      <h4 class="small-currency-decimal" data-bind="formattedCurrentBalance"><span>$0</span><span class="small-decimal">.00</span></h4>
      <div id="available-credit-progress">
        

{/* <div class="progress-bar-wrap">
  <div class="progress-bar-graph ">
    <div class="progress-bar" style="width: 0%;"><div class="progress-bar-tooltip"></div></div>
  </div>
  <div class="progress-bar-text">Available Credit: <br> $7,500.00 of $7,500.00</div>
</div> */}
      </div>

      <a href="/cards/" id="manageCard" class="btn-primary">Manage Cards</a>
    </div>
  </div>
  <div class="recent-activity">recent-activity</div>
  <div id="payment-info-block" class="info-block">payment-info-block</div>
  <div class="card-block">card-block</div>
  <div id="spend-overview-block" class="account-view">spend-overview-block</div>
      </div>
      </div>
  )
}
