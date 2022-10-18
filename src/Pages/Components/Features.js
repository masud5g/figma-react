import React from 'react';
import { Container, GridThree } from '../../Styles/Common.styled';
import { FeaturedCard, FeaturedSection } from '../../Styles/Home.styled';
import bootstrap from '../../images/bootstrap.png';
import materialui from '../../images/materialUI.png';
import tailwindcss from '../../images/tailwind.png';

const data = [
    {
        id: 1,
        name: 'Bootstrap',
        img: bootstrap,
        bgColor: 'rgba(109, 67, 161, 0.3)',
        color: 'rgba(109, 67, 161, 1)',
    },
    {
        id: 2,
        name: 'Material UI',
        img: materialui,
        bgColor: 'rgba(61, 128, 247, 0.3)',
        color: 'rgba(61, 128, 247, 1)',
    },
    {
        id: 3,
        name: 'Tailwind CSS',
        img: tailwindcss,
        bgColor: 'rgba(66, 166, 178, 0.3)',
        color: 'rgba(66, 166, 178, 1)',
    },
];

export default function Features() {
    return (
        <FeaturedSection>
            <Container>
                <h2>Others well known styling frameworks </h2>
                <GridThree gap="5rem">
                    {data.map((feature) => (
                        <FeaturedCard
                            bgColor={feature.bgColor}
                            color={feature.color}
                        >
                            <img src={feature.img} alt="Bootstrap" />
                            <div className="caption">
                                <p>{feature.name}</p>
                            </div>
                        </FeaturedCard>
                    ))}
                </GridThree>
            </Container>
        </FeaturedSection>
    );
}
