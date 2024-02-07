import { Dropdown, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'


export let Homepage = () => {
    return (
        <>
            <Navbar style={{ backgroundColor: 'skyblue' }} expand='lg'>
                <NavbarBrand>MENU CARD</NavbarBrand>
                <NavbarToggle></NavbarToggle>
                <NavbarCollapse>
                    <Nav>
                        <NavLink href='/home'>HOME</NavLink>
                        <NavLink href='/about'>ABOUT</NavLink>
                        <NavDropdown title='Dropdown'>
                            <Dropdown.Item>ITEM1</Dropdown.Item>
                            <Dropdown.Item>ITEM1</Dropdown.Item>
                            <Dropdown.Item>ITEM1</Dropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}