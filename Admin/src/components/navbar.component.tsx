import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';


const NavContianer = styled.nav`
  display: flex;
  padding: 1.4rem;
`
const NavBrand = styled.div`
justify-content: center;
align-items: center;
`
const RightElement = styled.div`
justify-content: end;
align-items: center;
`


const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  async function connect() {
    if (window.ethereum) {
      try {
         // res[0] for fetching a first wallet
      window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res: any) => {
        console.log(res[0])
        setIsConnected(true);});
      } catch (error) {
        console.log(error)
      }
     
    } else {
      alert("install metamask extension!!");
    }
  }
  return (
    <NavContianer className="navbar navbar-dark bg-dark navbar-expand-lg container-par">
      <NavBrand>      
        <Link to="/" className="navbar-brand">
        Refund by location Admin Panel
        </Link>
      </NavBrand>
      <RightElement className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item right-display">
            <Link to="#" onClick={connect} className="nav-link">
              { isConnected ? 'Connected' : 'Connect' }
            </Link>
          </li>
          <li className="navbar-item right-display">
            <Link to="/create" className="nav-link">
              Add Employee
            </Link>
          </li>
        </ul>
      </RightElement>
    </NavContianer>
  );
};

export default Navbar;
