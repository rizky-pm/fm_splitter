import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.footer`
    display: none;
    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: block;
        position: absolute;
        bottom: 5%;
        right: 50%;
        transform: translateX(50%);
    }
`;

const Attribution = styled.p`
    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        color: ${(props) => props.theme.colors.firstDarkGrayishCyan};
        text-align: center;
        font-size: 0.875rem;
        margin-top: 1.875rem;
        padding: 0 5rem;
        padding: 0;
    }
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;

    :hover {
        color: ${(props) => props.theme.colors.strongCyan};
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </Container>
    );
};

export default Footer;
