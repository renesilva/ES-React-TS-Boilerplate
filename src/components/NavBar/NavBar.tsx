import { NavBarOptionsProps } from './NavBar.interfaces';

export default function NavBar({ main, right }: NavBarOptionsProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container ">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto d-flex flex-wrap">
            {main.map((navBarOption, index) => (
              <li key={index}>Option</li>
            ))}
          </ul>
          <ul className="navbar-nav">
            {right.map((navBarOption, index) => (
              <li key={index}>Option</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
