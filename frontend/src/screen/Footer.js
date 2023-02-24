import '../App.css';

function Footer() {
  if (window.location.pathname === '/signup') return null;
  return (
    <footer className="footer-container">
      랑피드
    </footer>
  );
}

export default Footer;
