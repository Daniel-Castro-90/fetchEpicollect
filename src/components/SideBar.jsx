import { Link } from "react-router-dom";

function SideBar() {
    return(
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/dashboardDH/public/images/logo-DH.png" alt="DASHBOARD"/>
				</div>
			</Link>
			<hr className="sidebar-divider my-0"/>
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>¡Bienvenido, USUARIO!</span></a>
			</li>
			<hr className="sidebar-divider"/>
			<div className="sidebar-heading">Menú</div>
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/home">
					<i className="fas fa-fw fa-folder"></i>
					<span>Home</span>
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/tabla">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Tabla</span></Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/contact">
					<i className="fas fa-fw fa-table"></i>
					<span>Contact</span></Link>
			</li>
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    );
}

export default SideBar;