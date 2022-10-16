import styled from 'styled-components';

export const ListContacts = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    padding: 10px;
    display: grid;
    gap: 10px;
`;

export const ItemContact = styled.li`
    font-family: 'Ubuntu', sans-serif;
    color: #ffffff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DelBtn = styled.button`
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    color: #ffffff;
    background-color: #ffa200;
`;

export const Loader = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    color: #8a8a8a;
    text-align: center;
`;