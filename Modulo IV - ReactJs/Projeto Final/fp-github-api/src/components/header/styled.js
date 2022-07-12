import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
padding:4px;

input {
    border: 1px solid black;
    border-radius:8px;
    width:100%;
    height: 44px;
    padding:8px;
}

button{
    background-color: #8A2BE2;
    border-radius:8px;
    color:#fff;
    // font-weight:bold;
    padding: 8px 16px;
    margin:0 8px;

    &:hover{
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
        background-color: #56049f;
    }
}

`;
