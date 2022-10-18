import React from 'react';
import heroImg from '../../images/right.png';
import { Container } from '../../Styles/Common.styled';
import { HeroSection } from '../../Styles/Home.styled';

export default function Hero() {
    return (
        <Container>
            <HeroSection>
                <div>
                    <h2>
                        Learn Style Component from <span>Masud Hasan</span>
                    </h2>
                </div>
                <div>
                    <img src={heroImg} alt="Hero Image" />
                </div>
            </HeroSection>
        </Container>
    );
}
