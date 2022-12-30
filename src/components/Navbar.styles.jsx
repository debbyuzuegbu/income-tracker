import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaGithubSquare} from 'react-icons/fa';

export const Nav = styled.nav` 
font-family: 'Poppins', sans-serif;
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
background-color: #840c6e;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
`;

export const NavLogo = styled(Link)`
color: ;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 1.5rem;
font-weight: 600;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;

export const NavIcon = styled(FaGithubSquare)`
margin-right: .8rem;
transition: all .5s ease;
&:hover {
    transform: scale(2);
}
`;

export const MenuIcon = styled.div`
display: none;
@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 20%);
    font-size: 3rem;
    cursor: pointer;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;
@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: #850a70;
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 1.5rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;
&:hover {
    color: #840C70;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #43F3E3;
}
@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`;