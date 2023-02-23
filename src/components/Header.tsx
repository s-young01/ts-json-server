import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWreapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;
const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    li {
        list-style: none;
        padding: 0 20px;
    }
`;
type HeaderProps = {
    sitename: string,
    onChange: (subject: number) => void
}
const Header = ({sitename, onChange}: HeaderProps) => {
    return (
        <div>
            <HeaderWreapper>
                <h1><Link to='/'>{sitename}</Link></h1>
                <HeaderUl>
                    <li><Link to='/addSubject'>과목 등록</Link></li>
                    <li><Link to='/addFunction'>내장 함수 등록</Link></li>
                    <li onClick={() => onChange(0)}>
                        <Link to='/'>함수 리스트</Link></li>
                </HeaderUl>
            </HeaderWreapper>
        </div>
    );
};

export default Header;