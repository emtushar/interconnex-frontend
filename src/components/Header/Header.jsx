import React, { useNavigate } from "react";
import { useSelector } from "react-redux";

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
      <div>
        <h2>Logo</h2>
      </div>
      <nav>
        <ul>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
