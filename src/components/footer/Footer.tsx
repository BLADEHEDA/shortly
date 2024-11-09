import iconFacebook from "/icon-facebook.svg";
import iconTwitter from "/icon-twitter.svg";
import iconPinterest from "/icon-pinterest.svg";
import iconInstagram from "/icon-instagram.svg";
import "./Footer.css";
import logo from "/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="foooter-logo">Shortly</div>
      <div className="foooter">
        <h3 className="">Features</h3>
        <p className="">Link Shortening</p>
        <p className="">Branded Links</p>
        <p className="">Analytics</p>
      </div>
      <div className="foooter">
        <h3 className="">Resources</h3>
        <p className="">Blog</p>
        <p className="">Developers</p>
        <p className="">Support</p>
      </div>
      <div className="foooter">
        <h3 className="">Company</h3>
        <p className="">About</p>
        <p className="">Our Team</p>
        <p className="">Careers</p>
        <p className="">Contact </p>
      </div>
      <div className="footer-icon-div">
        <div className="">
          <img src={iconFacebook} alt="facebook" />
        </div>
        <div className="">
          <img src={iconFacebook} alt="facebook" />
        </div>
        <div className="">
          <img src={iconPinterest} alt="facebook" />
        </div>
        <div className="">
          <img src={iconInstagram} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
