
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => (
    <header id="sidebar">
  <div className="side-menu-wrapper">
    <div className="top-logo">
      <Link href="/">
        <a><Image src="/img/driven.svg"  width={150} height={100} /></a>
      </Link>
    </div>

    <ul>
      <li className="no-selection account-info-top">
        <span href="" className="user-icon">
          <span className="menu-icon user-picture">AM</span>
          <span className="menu-text"><span className="user-name">arco manager</span>
        </span></span>
        <div className="mega-menu-trigger single-account">
          <div>
            <div className="account-name" title="PRAGYA VYAS">PRAGYA VYAS</div>
          </div>
          <icon className="icon-font icon-arrow-right"></icon>
        </div>
      </li>
      <li data-pm-id="pm01" className="current selected">
      <Link href="/">
        <a>Dashboard</a>
      </Link>  
      </li>
      <li data-pm-id="pm03" id="activity-menu">
      <Link href="/spend">
        <a>Spend</a>
      </Link>        
      </li>
      <li data-pm-id="pm03" id="activity-menu">
      <Link href="/cards">
        <a>Manage Cards</a>
      </Link>        
      </li>
      <li data-pm-id="pm03" id="activity-menu">
      <Link href="/reports">
        <a>My Reports</a>
      </Link>        
      </li>
    </ul>
  </div>
</header>
)

export default Nav