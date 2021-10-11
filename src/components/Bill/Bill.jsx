import React from 'react';
import styled from 'styled-components/macro';

import DollarIcon from '../../images/icon-dollar.svg';

import { handleBill, calculate } from '../../utils/handleChange';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.label`
    font-weight: 700;
`;

const InputWrapper = styled.div`
    position: relative;
    margin-top: 10px;
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

const Input = styled.input.attrs({
    type: 'number',
})`
    -moz-appearance: textfield;
    background-color: ${(props) => props.theme.colors.secondLightGrayishCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    text-align: right;
    font-family: 'Space Mono', monospace;
    width: 310px;
    height: 45px;
    padding: 15px 20px 15px 40px;
    border-radius: 5px;
    font-size: 22px;
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

const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 12px;
`;

const Bill = (props) => {
    return (
        <Container>
            <Title>Bill</Title>
            <InputWrapper>
                <HiddenLabel htmlFor='bill'>Bill</HiddenLabel>
                <Icon src={DollarIcon} alt='Dollar Icon' />
                <Input
                    id='bill'
                    name='Bill'
                    placeholder='0'
                    step='.01'
                    onChange={(e) => {
                        handleBill(e, props.setTotal, props.total);
                    }}
                    onKeyUp={(e) => {
                        calculate(e, props.setTotal, props.total);
                    }}
                    noValidate
                />
            </InputWrapper>
        </Container>
    );
};

export default Bill;
