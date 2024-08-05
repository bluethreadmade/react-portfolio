// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Footer from "./UI/Footer";

export default function FooterLinks() {
  // The Footerlinks UI component will render each of the Link elements in the links prop
  return (
    <Footer
      links={[
        <Link key={1} className="nav-link text-light" to="#">
          Github{" "}
        </Link>,
        <Link key={2} className="nav-link text-light" to="#">
          LinkedIn
        </Link>,
        <Link key={3} className="nav-link text-light" to="#">
          Artisans
        </Link>,
      ]}
    />
  );
}
