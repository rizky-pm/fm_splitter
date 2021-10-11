export const handleBill = (e, setTotal, total) => {
    e.preventDefault();
    setTotal({
        ...total,
        bill: parseFloat(e.target.value),
    });
};

export const handleTip = (e, setTotal, total) => {
    setTotal({
        ...total,
        tip: parseInt(e.target.value),
        tipperperson: (((total.bill / 100) * total.tip) / total.people).toFixed(
            2
        ),
        totalperperson: (
            ((total.bill / 100) * total.tip) / total.people +
            total.bill / 5
        ).toFixed(2),
    });
};

export const handlePeople = (e, setTotal, total) => {
    e.preventDefault();
    setTotal({
        ...total,
        people: parseFloat(e.target.value),
    });
};

export const calculate = (e, setTotal, total) => {
    // e.preventDefault();
    console.log('Calculate Fired');

    setTotal({
        ...total,
        tipperperson: (((total.bill / 100) * total.tip) / total.people).toFixed(
            2
        ),
        totalperperson: (
            ((total.bill / 100) * total.tip) / total.people +
            total.bill / 5
        ).toFixed(2),
    });
};
