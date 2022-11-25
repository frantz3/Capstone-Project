
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,

} from "mdb-react-ui-kit";

function NavBar({ setUser }) {


  const handleLogoutClick = () => {
    const config = {
      method: "DELETE",
    };

    fetch("/logout", config).then((resp) => {
      setUser({ username: "" });
      console.log(resp);
    });
  };

  return (
    <MDBNavbar className="nav navbar-nav" expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/home">Home</MDBNavbarBrand>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <br />
            <MDBNavbarItem>
              <Link onClick={handleLogoutClick} href="/login" className="ml-auto">Logout</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavBar;
