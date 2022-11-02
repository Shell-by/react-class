import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    //컴포넌트가 렌더링 될 때마다 실핼
    /*
    useEffect(() => {
        console.log('렌더링 완료');
        console.log({
            name,
            nickname
        });
    });
    */

    //마운트 될 때만 실행
    /*
    useEffect(() => {
        console.log('마운트 될때만 실행')
    }, []);
    */

    //특정값이 업데이트 될 떄만 실행 : DidUpdate
    /*
    useEffect(() => {
        console.log('업데이트 될때만 실행')
    }, [name]);
    */

    // 언마운트 되기 전 또는 업데이트 되기 전 특정 작업을 시킬 때
    /*
    useEffect(() => {
        console.log('effect');
        console.log(name);

        return () => {
            console.log('cleanup');
            console.log(name);
        }
    })
    */

    //언마운트 할때만 cleanup 이 실행되게
    useEffect(() => {
        console.log('effect');
        console.log(name);

        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name])

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} type="text" onChange={onChangeName} />
                <input value={nickname} type="text" onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름: </b> {name} <br />
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    )
}

export default Info;