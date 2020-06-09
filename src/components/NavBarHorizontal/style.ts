import styled from 'styled-components';


export const StyledNavBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: rgba(0,0,0,.9);
    display: flex;
    justify-content: center;
    box-shadow:0px 5px 10px rgba(0,0,0,.25)
`;

export const StyledNavBarContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const StyledTitle = styled.h2`
    color: white;
    padding: 0 10px;
`;

export const StyledList = styled.ul`
    list-style: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase
`;
