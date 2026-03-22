import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer w-full py-4 bg-gray-800 text-white text-center">
      <div className="container footer-content">
        <p> {new Date().getFullYear()} Aakrish Lama</p>
        <div className="footer-links">
          <a href="https://github.com/AakrishLama" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aakrishlama/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
