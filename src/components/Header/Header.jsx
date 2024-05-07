import React, { useNavigate } from "react";
import { useSelector } from "react-redux";
import Container from "../container/container";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Profile", slug: "/profile", active: authStatus },
  ];
  return (
    <header>
      <Container>
        <div>
          <Link to="/">
            <h2>Logo</h2>
          </Link>
        </div>
        <nav>
          <ul>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
