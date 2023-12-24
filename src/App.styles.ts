import styled from "styled-components"

export const Container = styled.div`
    background-color: #0F172A;
    color: #FFF;
    min-height: 100vh;

    @media(max-width: 768px) {
       padding: 10px;
    }
`
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0px;
`

export const Header = styled.h1`
    text-align: center;
    margin-bottom: 30px;
` 

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media(min-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media(min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

`

export const UploadForm = styled.form`
    background-color: #1F2937;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type="submit"] {
        background-color: #756DF4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 8px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }
    label {
        display: none;
    }

    @media(max-width: 320px) {
        display: flex;
        flex-direction: column;
        label {
            text-align: center;
            display: block;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 10px;
            background-color: #756DF4;
            flex: 1;

        }
        input[type="file"] {
            opacity: 0;
        }
        input[type="submit"] {
            flex: 1;
            margin: 8px 0;
            padding: 10px 16px;
        }
    }

    

`


