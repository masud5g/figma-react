import styled from 'styled-components';

export const HeroSection = styled.div`
    padding: 8rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        flex: 1;
    }
    h2 {
        font-size: 6.4rem;
        font-weight: 700;
        span {
            color: #5156d9;
        }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        padding: 2rem;
        gap: 2rem;
        text-align: center;
        h2 {
            font-size: 4.4rem;
            padding: 0 4rem;
        }
    }
`;

export const TopSection = styled.section`
    background: linear-gradient(
        180deg,
        #d1d2f1 0.47%,
        rgba(217, 217, 217, 0) 85.31%
    );
`;

export const FeaturedSection = styled.section`
    background: linear-gradient(180deg, #ffffff 0.09%, #c9eff1 100%);
    padding: 6rem 0;
    h2 {
        text-align: center;
        padding: 4rem 0;
        font-size: 4.2rem;
        color: #5156d9;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 2rem 0;
    }
`;

export const FeaturedCard = styled.section`
    img {
        width: 100%;
        height: 200px;
    }
    .caption {
        background-color: ${({ bgColor }) => bgColor};
        color: ${({ color }) => color};
        padding: 2rem;
        text-align: center;
        font-size: 2rem;
    }
`;
