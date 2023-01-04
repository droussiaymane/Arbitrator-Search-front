import React from "react";
import "./Footer.css";
import Youtube from "../../assets/images/socialIconYouTube.png";
import LinkedIn from "../../assets/images/socialIconIn.png";
import Twitter from "../../assets/images/socialTwit.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-pad">
        <span style={{ margin: "0 0 0 10px" }}>
          © 2022 American Arbitration Association
        </span>

        <span style={{ float: "right", margin: "0 10px 0 0" }}>
          ADR Tools (ver 4.3.2)
        </span>
      </div>
      <div className="footer-buttom">
        <a
          className="af_link"
          href="https://uat.adr.org/ContactUs"
          target="_blank"
          data-afr-tlen="7"
        >
          <span className="af_link_text">Contact</span>
        </a>

        <a
          title="Privacy"
          className="af_link"
          href="https://uat.adr.org/PrivacyPolicy"
          target="_blank"
          data-afr-tlen="7"
        >
          <span className="af_link_text">Privacy</span>
        </a>

        <a
          title="Terms of Use"
          className="af_link"
          href="https://uat.adr.org/terms-of-use"
        >
          <span id="pt1:goLink8::text" className="af_link_text">
            Terms of Use
          </span>
        </a>

        <a
          className="af_link"
          href="https://uat.adr.org/Secure_Case_Administration"
        >
          <span className="af_link_text">Secure Case Administration</span>
        </a>

        <table>
          <tbody>
            <tr>
              <td>
                <span style={{ paddingRight: "10px" }}>Follow AAA®</span>
              </td>
              <td>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/company/american-arbitration-association"
                  target="_blank"
                >
                  <img id="linkedIn" src={LinkedIn} />
                </a>
              </td>
              <td>
                <a
                  className="twitter"
                  href="https://twitter.com/adrorg"
                  target="_blank"
                >
                  <img id="twitter" src={Twitter} />
                </a>
              </td>
              <td>
                <a
                  className="youtube"
                  href="https://www.youtube.com/channel/UCs9Y1btc_lh7m2xGoM6Yhzg"
                  target="_blank"
                >
                  <img id="youtube" src={Youtube} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
