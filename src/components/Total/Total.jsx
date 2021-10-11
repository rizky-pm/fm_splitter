import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.veryDarkCyan};
    width: 325px;
    height: 255px;
    margin-top: 40px;
    padding: 30px 25px 25px 25px;
    border-radius: 15px;
`;

const Detail = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: 'Title Nominal';
    margin-top: ${(props) => (props.total ? '-25px' : '0')};
`;

const Title = styled.p`
    grid-area: Title;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 18px;

    > span {
        color: ${(props) => props.theme.colors.firstDarkGrayishCyan};
        font-size: 15px;
    }
`;

const Nominal = styled.p`
    grid-area: Nominal;
    text-align: right;
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.strongCyan};
`;

const ResetButton = styled.button`
    background-color: ${(props) => props.theme.colors.strongCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    font-family: 'Space Mono', monospace;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    height: 50px;
`;

const Total = (props) => {
    let isANumber = isNaN(props.tipperperson);

    return (
        <Container>
            <Detail>
                <Title>
                    Tip Amount <br /> <span>/ person</span>
                </Title>
                <Nominal>{isANumber ? '0' : props.tipperperson}</Nominal>
            </Detail>
            <Detail total>
                <Title>
                    Total <br /> <span>/ person</span>
                </Title>
                <Nominal>{isANumber ? '0' : props.totalperperson}</Nominal>
            </Detail>
            <ResetButton>RESET</ResetButton>
        </Container>
    );
};

export default Total;
