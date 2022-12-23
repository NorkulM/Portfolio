import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome to <br />Nicollas Martens Portfolio</SectionTitle>
      <SectionText>
        Here is a showcase of what I have been building and learning lately!
      </SectionText>
      <Button onClick={() => window.location = "http://api.whatsapp.com/send?phone=5551991219968&text=Hello"}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;