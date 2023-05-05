import "./footer.scss";
import * as icons from "../assets/footerImg/footer";
export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.fb})` }}
          ></i>
        </a>
        <a href="/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.github})` }}
          ></i>
        </a>
        <a href="/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.twitter})` }}
          ></i>
        </a>
        <a href="/">
          <i
            className="icons"
            style={{ backgroundImage: `url(${icons.linkedIn})` }}
          ></i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/">
            Home
          </a>

          <a href="/">Chart Page</a>
        </p>

        <p>Company Name &copy; 2015</p>
      </div>
    </footer>
  );
}
