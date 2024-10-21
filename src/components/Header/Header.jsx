import { Link } from 'react-router-dom';

export const Header = (props) => {
  const { title } = props;
  
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">{title}</Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to='/meals'>Meals</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}