import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../public/color';
import Logo from '../public/logo-small.png';
import * as Icon from 'react-feather';



const MenuUI = styled.div`

width: 100vw;
height: 100vh;
background: ${color.blue};
display: flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
transition: 1s ease-out;
z-index: 100;


`

const LinkUI = styled.a`

font-family: nunito;
margin: 25px 0;
text-decoration: none;
cursor: pointer;
font-size: 18px;

`

const NavBarUI = styled.a`

display: flex;
height: 150px;
width: 100vw;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
z-index: 100;
font-size: 18px;
background: ${color.blue};

`

const SocialUI = styled.a`

display: flex;
height: 100px;
width: 100vw;
justify-content: center;
align-items: center;
position: absolute;
bottom: 0;
z-index: 100;
font-size: 24px;

`

const SocialLinkUI = styled.a`

margin: 0 25px;
cursor: pointer;

`

const IconUI = styled.div`

position: absolute;
right: 10vw;
color: white;
cursor: pointer;

`



export const Menu = ({ label="hey" }) => {

    const [menuActive, setMenuActive] = useState(false)

  return (
    <>

    <NavBarUI>

        <img src={Logo}/>

        <IconUI>

            {menuActive ? (  
            <Icon.X 
            onClick={() => setMenuActive(!menuActive)}/>
            ) : (            
            <Icon.Menu 
                onClick={() => setMenuActive(!menuActive)}/>
            )}

        </IconUI>
    </NavBarUI>
                {menuActive ? (
                
    <MenuUI>

        <LinkUI>Eco Test</LinkUI>
        <LinkUI>Sustainable Stores</LinkUI>
        <LinkUI>Disposal Methods</LinkUI>
        <LinkUI>Materials</LinkUI>
        <LinkUI>About</LinkUI>

        <SocialUI>
            <SocialLinkUI>
                <Icon.Instagram />
            </SocialLinkUI>
            <SocialLinkUI>
                <Icon.Facebook />
            </SocialLinkUI>
        </SocialUI>

    </MenuUI>

) : <div></div>
}

</>
    );
};

