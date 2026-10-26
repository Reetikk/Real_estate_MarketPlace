import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  return <header className="site-nav"><Link to="/" className="brand">estate<span>hub</span><i>.</i></Link><nav className="navlinks"><Link to="/properties">Find a home</Link><a href="/#how-it-works">Our approach</a>{user && <Link to="/dashboard">Dashboard</Link>}</nav><div className="nav-end">{user ? <><span className="nav-greeting">Hi, {user.name?.split(' ')[0]}</span><button className="nav-login" onClick={logout}>Log out <span>↗</span></button></> : <Link className="nav-login" to="/login">Sign in <span>↗</span></Link>}<Link className="nav-mobile-cta" to="/properties">Explore homes ↗</Link></div></header>;
}
