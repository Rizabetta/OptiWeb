import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./style.css";

function Header() {
  const navLinks = [
    { to: "/", name: "Главная" },
    { to: "/gallery", name: "Галерея" },
  ];

  return (
    <header>
      <div className="header-nav">
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={nanoid(8)}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-access">
        <button disabled>Sign Up</button>
        <button disabled>Sign In</button>
      </div>
    </header>
  );
}

export { Header };
