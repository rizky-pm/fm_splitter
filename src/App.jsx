import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

import Bill from './components/Bill/Bill';
import SelectTip from './components/SelectTip/SelectTip';
import People from './components/People/People';
import Total from './components/Total/Total';

import { handleBill, calculate } from './utils/handleChange';

const Title = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.veryDarkCyan};
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 10px;
    padding-top: 50px;
`;

const Container = styled.main`
    background-color: ${(props) => props.theme.colors.white};
    margin-top: 40px;
    width: 100%;
    height: 100%;
    border-radius: 25px 25px 0 0;
    padding: 40px 30px;
`;

const Form = styled.form``;

function App() {
    const [total, setTotal] = useState({
        bill: 0,
        tip: 0,
        people: 0,
        tipperperson: 0,
    });

    console.log(total);

    // let tipperperson = useRef(0);
    // let totalperperson = 0;

    // useEffect(() => {
    //     tipperperson.current = (
    //         ((total.bill / 100) * total.tip) /
    //         total.people
    //     ).toFixed(2);
    //     console.log(tipperperson.current);
    // }, [total]);

    // console.log('Outside useEffect' + passedtip);

    return (
        <>
            <Title>
                SPLI <br /> TTER
            </Title>
            <Container>
                <Form
                // onChange={(e) => {
                //     handleBill(e, setTotal, total);
                //     calculate(e, setTotal, total);
                // }}
                >
                    <Bill setTotal={setTotal} total={total} />
                    <SelectTip setTotal={setTotal} total={total} />
                    <People setTotal={setTotal} total={total} />
                    <Total
                        tipperperson={total.tipperperson}
                        // tipperperson={tipperperson.current}
                        // totalperperson={totalperperson}
                    />
                </Form>
            </Container>
        </>
    );
}

export default App;
