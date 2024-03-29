import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem"/> <Span>Nicollas Martens</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <l1>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </l1>
      <l1>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </l1>
      <l1>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </l1>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/NorkulM'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nicollas-martens/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
