import { useEffect, useReducer } from "react"

// 상태를 위한 타입
export type SubjectdataType = {
    id: number,
    title: string
}
export type ListdataType = {
    id: number,
    subjects: number,
    name: string,
    type: string,
    systex: string,
    desc: string
}

// 상태 타입
export type funState = {
    loading: boolean,
    data: null | SubjectdataType[] | ListdataType[],
    error: null | object 
}

// 모든 액션을 위한 타입
type funAction = {type: 'LOADING'}
| {type: 'SUCEESS', data: SubjectdataType[] | ListdataType[]}
| {type: 'ERROR', error: any}

// 리듀서 함수
function reducer(state: funState, action: funAction) {
    switch(action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCEESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}

type fetch = () => void;
const useAsync = (callback: any, deps=[]): [funState, fetch] => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });
    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({type: 'SUCEESS', data});
        }
        catch(e) {
            dispatch({type: 'ERROR', error: e});
        }
    }
    useEffect(() => {
        fetchData();
    }, deps);
    return [state, fetchData];
}

export default useAsync;