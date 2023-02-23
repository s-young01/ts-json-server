import React, { useState } from 'react';

const AddFunction = () => {
    const [fun, setFun] = useState({
        subjects: '',
        name: '',
        type: '',
        systex: '',
        desc: ''
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFun({
            ...fun,
            [name]: name === 'subjects' ? Number(value) : value
        });
    }
    const submit = () => {
        fetch(`http://localhost:3000/functions/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subjects: fun.subjects,
                name: fun.name,
                type: fun.type,
                systex: fun.systex,
                desc: fun.desc
            })
        }).then(res => {
            console.log(res);
            if(res.ok) {
                alert('함수가 추가되었습니다.')
            }
        })
        .catch(e => console.log(e))
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>과목 번호</th>
                        <td>
                            <input type='text' name='subjects' onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>함수명</th>
                        <td>
                            <input type='text' name='name' onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>데이터 타입</th>
                        <td>
                            <input type='text' name='type' onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>구문</th>
                        <td>
                            <input type='text' name='systex' onChange={onChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>설명</th>
                        <td>
                            <input type='text' name='desc' onChange={onChange}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={submit}>추가</button>
            </div>
        </div>
    );
};

export default AddFunction;