import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html,
    body {
    font-family: BookkMyungjo-Bd ,PilseungGothic,HS-,Pretendard-Regular,Cafe24ClassicType-Regular,designhouseOTFLight00,SunBatang-Light;
    padding: 0;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
    }
    a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    }
    b {
        font-weight: 800;
    }
    i {
        font-style: italic;
    }
    *,
    *:before,
    *:after {
    font-family: Pretendard-Regular;
    box-sizing: border-box;
    }
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ced4da;
        &:hover {
            background-color: #adb5bd;
        }
    }
    
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        font-family: Pretendard-Regular;
        font-weight: 600;
    }
`;

