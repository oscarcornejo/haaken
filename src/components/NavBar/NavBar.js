import { Link, useHistory } from "react-router-dom";

// React Suite
import { Navbar, Nav, Icon, Dropdown } from "rsuite";

// Components
import CartWidget from "../CartWidget/CartWidget";

// CSS
import "./NavBar.css";

const NavBar = () => {
  // const [activeKey, setActiveKey] = useState(null);
  const history = useHistory();

  const handleSelect = (eventKey) => {
    // console.log(eventKey);
    // setActiveKey(eventKey);
    history.push(`/category/${eventKey}`);
  };

  return (
    <Navbar appearance="inverse" className="navbar-container">
      <Navbar.Header>
        <Link to="/" className="navbar-brand logo">
          Haaken
        </Link>
      </Navbar.Header>

      <Navbar.Body>
        <Nav pullRight>
          <Dropdown
            title="Categorias"
            icon={<Icon icon="thumbs-o-up" />}
            onSelect={handleSelect}
            activeKey="audifonos"
          >
            <Dropdown.Item eventKey="todos">Todos los Productos</Dropdown.Item>
            <Dropdown.Item eventKey="audifonos">audifonos</Dropdown.Item>
            <Dropdown.Item eventKey="mouse">Mouse</Dropdown.Item>
            <Dropdown.Item eventKey="microfonos">Microfonos</Dropdown.Item>
            <Dropdown.Item eventKey="mousepad">Mousepad</Dropdown.Item>
            <Dropdown.Item eventKey="teclados">Teclados</Dropdown.Item>
          </Dropdown>

          <CartWidget />
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavBar;
