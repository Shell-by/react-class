import React, {useState, useMemo, useCallback, useRef} from "react";

const getAverage= numbers => {
    console.log('평균 계산 중');
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((a,b) => a + b);
    return (sum / numbers.length);
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    //useCallback : [number, list]가 변화했을때 함수 생성
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        //current 있어야함
        inputEl.current.focus();
    }, [number, list]);

    //컴포넌트가 처음으로 렌더링 될때만 샐성
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    //useMemo : [list]가 변화됐을때 (() => getAverages(list))를 실행
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>추가</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                평균값 : {avg}
            </div>
        </div>
    )
}

export default Average;