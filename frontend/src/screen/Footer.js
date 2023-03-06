import '../App.css';

function Footer() {
  if (window.location.pathname == '/signup' || window.location.pathname == '/signup2') return null;
  return (
    <footer className="footer-container">
      랑피드
    </footer>
  );
}

export default Footer;
