import React from 'react'

const today = new Date()

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer__inner">
            <p className="footer__inner_text">PozitiFF Company s.r.o.</p>
            <p className="footer__inner_text" style={{fontSize: '1rem'}}>V Šáreckém údolí 2815, Dejvice, 164 00 Praha 6</p>
            <p className="footer__inner_text" style={{fontSize: '1rem'}}>IČO: 25734610, DIČ: CZ25734610.</p>
            <p className="footer__inner_text" style={{fontSize: '.875rem'}}>Společnost je zapsaná v OR, vedeného MS v Praze, spisová značka C 65425</p>
            <p className="footer__inner_text--small">
              Copyright &copy; {today.getFullYear()} PozitiFF Company s.r.o. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
