export const Header = (props) => {
  const { title } = props;
  
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">{title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="!#">Repo</a></li>
        </ul>
      </div>
    </nav>
  );
}