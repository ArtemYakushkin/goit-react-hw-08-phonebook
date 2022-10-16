import styled from 'styled-components';

export const WrapUserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

export const BtnLogOut = styled.button`
    cursor: pointer;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    padding: 5px 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #ffa200;
    text-align: center;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover:not(.active),
    :focus-visible:not(.active) {
        border: 1px solid #ffa200;
        background-color: #ffffff;
        color: #ffa200;
    }
`;

export const TextUserMenu = styled.p`
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 5px;
    color: #ffffff;
`;

export const NameUser = styled.span`
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
    color: #ffa200;
`;