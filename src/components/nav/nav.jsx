import Link from 'next/link'
const Nav = () => (
    <header id="sidebar">
  <div className="side-menu-wrapper">
    <div className="top-logo">
      <a href="/">
        <img src="/img/driven.svg" />
      </a>
    </div>

    <ul>
      <li className="no-selection account-info-top">
        <a href="" className="user-icon">
          <span className="menu-icon user-picture">AM</span>
          <span className="menu-text"><span className="user-name">arco manager</span>
        </span></a>
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