import { useAuth } from '../context/AuthContext';


export default function Dashboard() { const { user } = useAuth(); return <main className="page"><p className="eyebrow">ACCOUNT</p><h1>Hello, {user?.name}</h1><div className="dashboard"><div><b>Role</b><span>{user?.role}</span></div><div><b>Secure session</b><span>HttpOnly JWT cookie</span></div><div><b>Marketplace access</b><span>Authorized by API</span></div></div></main> }
