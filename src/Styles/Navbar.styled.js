import styled from 'styled-components';

export const Navigation = styled.nav`
    min-height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 7rem;
        width: 7rem;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        li {
            font-size: 1.8rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        padding: 2rem;
        gap: 2rem;
    }
`;

export const FooterSection = styled.section`
    padding: 2rem;
    text-align: center;
    font-size: 1.8rem;
    background-color: #e1f4ff;
    span {
        color: blue;
    }
`;
