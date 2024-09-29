export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-footer green darken-1">
      <div className="footer-copyright">
        <div className="container">
        © {currentYear} Copyright Text

        <a className="grey-text text-lighten-3 right" href="#!">Repository</a>
        </div>
      </div>
    </footer>
  );
}