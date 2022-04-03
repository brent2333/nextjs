import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AccountOverview from '../src/components/dashboard/AccountOverview'

const Home = (props) => {
  return (
    <div id="content-wrap">
    <div className="container dashboard">
    <div className="heading">
      <h1 >Dashboard</h1>
      </div>
    <AccountOverview
    title="Account Overview"
    activeCards="6"
    currentBalance="$764.27"
    ></AccountOverview>
  <div className="recent-activity">recent-activity</div>
  <div id="payment-info-block" className="info-block">payment-info-block</div>
  <div className="card-block">card-block</div>
  <div id="spend-overview-block" className="account-view">spend-overview-block</div>
      </div>
      </div>
  )
}
export default Home;
