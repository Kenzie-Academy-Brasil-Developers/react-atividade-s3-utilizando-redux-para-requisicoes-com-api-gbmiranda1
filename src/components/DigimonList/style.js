import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0e71b7;
    width: 240px;
    height: 230px;
    margin-bottom: 30px;
    font-size: 20px;
    img{
        width: 150px;
    }
    span{
        margin: 10px 0px;
    }

`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    Div ~ Div{
        margin-left: 10px;
    }
`;