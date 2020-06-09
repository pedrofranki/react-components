import styled from 'styled-components';


export const StyledListItem = styled.li`
    display: inline-block;
    &:not(:last-child){
        margin-right: 35px;
    }
    position: relative;
`;

export const StyledSubList = styled.ul`
    list-style: none;
    position: absolute;
    top: 40px;    
    background-color: rgba(0,0,0,.9);    
    text-align: center;
    justify-content: start;
    list-style-type:none;
    border-radius: 3px;
`;

export const StyledSubListItem = styled.li`
    display: flex;
    margin-left: -40px;
    /* margin-bottom: 2.5px; */
    padding: 5px 35px 0 5px;
    margin-bottom: 5px;
    font-weight: 400;
`;
