import React from 'react';
import styled from 'styled-components/macro';

import { handleTip, calculate } from '../../utils/handleChange';

const Container = styled.div`
    margin-top: 40px;
`;

const Title = styled.p`
    font-weight: 700;
`;

const Form = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
    width: 310px;
    height: 170px;
    margin-top: 20px;
`;

const TipOptionRadioBullet = styled.input.attrs({
    type: 'radio',
})`
    visibility: hidden;
    height: 0;
    width: 0;
`;

const TipOptionRadioLabel = styled.label`
    background-color: ${(props) => props.theme.colors.veryDarkCyan};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 145px;
    height: 50px;
    border-radius: 5px;
    font-size: 24px;
    font-weight: 700;
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        background-color: ${(props) =>
            props.theme.colors.firstLightGrayishCyan};
        color: ${(props) => props.theme.colors.veryDarkCyan};
    }

    ${TipOptionRadioBullet}:checked + && {
        background-color: ${(props) => props.theme.colors.strongCyan};
        color: ${(props) => props.theme.colors.veryDarkCyan};
    }
`;

const HiddenLabel = styled.label`
    border-width: 0 !important;
    clip: rect(0.0625rem, 0.0625rem, 0.0625rem, 0.0625rem) !important;
    height: 0.0625rem !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 0.0625rem !important;
`;

const InputCustom = styled.input.attrs({
    type: 'number',
})`
    -moz-appearance: textfield;
    text-align: center;
    font-family: 'Space Mono', monospace;
    background-color: ${(props) => props.theme.colors.secondLightGrayishCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    border-radius: 5px;
    width: 145px;
    height: 50px;
    font-size: 24px;
    font-weight: 700;

    :focus {
        border: 2px solid ${(props) => props.theme.colors.strongCyan};
        border-radius: 5px;
        outline: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const SelectTip = (props) => {
    return (
        <Container>
            <Title>Select Tip %</Title>
            <Form
                onChange={(e) => {
                    handleTip(e, props.setTotal, props.total);
                }}
            >
                <TipOptionRadioBullet name='tip' id='fivepercent' value='5' />
                <TipOptionRadioLabel htmlFor='fivepercent'>
                    5%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet name='tip' id='tenpercent' value='10' />
                <TipOptionRadioLabel htmlFor='tenpercent'>
                    10%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='fifteenpercent'
                    value='15'
                />
                <TipOptionRadioLabel htmlFor='fifteenpercent'>
                    15%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='twentyfivepercent'
                    value='25'
                />
                <TipOptionRadioLabel htmlFor='twentyfivepercent'>
                    25%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet name='tip' id='fiftypercent' value='50' />
                <TipOptionRadioLabel htmlFor='fiftypercent'>
                    50%
                </TipOptionRadioLabel>
                <HiddenLabel htmlFor='custom' />
                <InputCustom name='tip' id='custom' placeholder='Custom' />
            </Form>
        </Container>
    );
};

export default SelectTip;
