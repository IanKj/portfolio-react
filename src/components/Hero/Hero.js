import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hey there, <br />
        this is my portfolio
      </SectionTitle>
      <SectionText>
        I am a React developer specializing in presenting data in a fun and engaging manner.
      </SectionText>
      <Button>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;