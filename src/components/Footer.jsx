import React from 'react'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer><div className="footer-desktop">
  <div className="copyright">
    <div>© 2021 FLEETCOR Technologies, INC.</div>
  </div>

  <div className="footer-links">
    <Link href="https://www.kwiktrip.com/privacy-terms" className="terms" id="terms-link" data-attr="href:termsUrl" target="_blank">Terms</Link>
    <Link href="/support/contact-us/" className="contact">Contact</Link>
    <Link href="https://www.kwiktrip.com/kwik-trip-privacy-policy" className="privacy" id="privacy-link" data-attr="href:privacyUrl" data-hide="footerPrivacy" target="_blank">Privacy</Link>
    <Link href="https://www.ifleet.com/U2App/Files/Terms.htm" className="comm d-none" id="communications-link" data-attr="href:communicationsUrl" data-hide="footerComm" target="_blank" style="display: none;">Communications</Link>
    <Link href="http://sitelocator.fleetcor.com/Site/Index?network=kwiktrip" className="fuel-locate" id="fuel-locator-link" target="_blank"><span>Fuel Locator</span></Link>
  </div>
</div>
</footer>   
    )

}

export default Footer;