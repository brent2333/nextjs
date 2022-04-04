import React, {Fragment} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AccountOverview from '../src/components/dashboard/AccountOverview'
import RecentActivity from '../src/components/dashboard/RecentActivity'

const Home = ({transactions}) => {
  return (
    <Fragment>
    <div className="container dashboard">
    <div className="heading">
      <h1 >Dashboard</h1>
      </div>
    <AccountOverview
    title="Account Overview"
    activeCards="6"
    currentBalance="$764.27">
    </AccountOverview>
    <RecentActivity
    transactions={transactions}>
    </RecentActivity>
  {/* <div className="recent-activity">recent-activity</div> */}
  <div id="payment-info-block" className="info-block">payment-info-block</div>
  <div className="card-block">card-block</div>
  <div id="spend-overview-block" className="account-view">spend-overview-block</div>
      </div>
      </Fragment>
  )
}
export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/transactions`)
  const {data} = await res.json()
  return {
    props: {transactions: data}
  }
}
