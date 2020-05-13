import styled from "styled-components";

export const FooterBox = styled.div`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 400px;
    justify-content: center;
    width: 100%;
    height: 200px;           
    background-color:rgb(241, 241, 241);
    border-top: 1px solid #ccc;
    justify-content: center;
    color: #ccc;
    font-size: 16px;
    padding: 0 20px;
`
export const Story = styled.div`
 
`

export const CopyRight = styled.div`
    justify-content: center;
    color: #ccc;
    margin-top: 30px; 
`
export const A = styled.a`
    color: #ccc;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none; 
    cursor: pointer;
    &: hover{
        color:gray;
        font-weight: 600;
    }

`