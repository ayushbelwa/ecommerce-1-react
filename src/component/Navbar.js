import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import './css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const navbar = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-light ">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">
                                <input className="form-control me-2" type="search" placeholder="Search Product,Brands and More" aria-label="Search" />
                            </Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><StyledBadge badgeContent={7} color="secondary"><ShoppingCartIcon /></StyledBadge></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <StyledBadge badgeContent={7} color="secondary"><NotificationsNoneOutlinedIcon /></StyledBadge>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <FavoriteBorderOutlinedIcon />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Stack direction="row" spacing={2}>
                                    <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} src="../images/story4.jpg" />

                                </Stack>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default navbar;

