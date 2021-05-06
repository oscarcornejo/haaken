import { useState } from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";

import "./NavBar.css";

const NavBar = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <Navbar appearance="inverse">
      <Navbar.Header>
        <a href="#!" className="navbar-brand logo">
          Haaken
        </a>
      </Navbar.Header>

      <Navbar.Body>
        <Nav onSelect={handleSelect} activeKey={activeKey} pullRight>
          <Dropdown title="Productos" icon={<Icon icon="thumbs-o-up" />}>
            <Dropdown.Item eventKey="4">Producto A</Dropdown.Item>
            <Dropdown.Item eventKey="5">Producto B</Dropdown.Item>
            <Dropdown.Item eventKey="6">Producto C</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavBar;
