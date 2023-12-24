import styled from 'styled-components';


export const Container = styled.div`
    background-color: #1F2937;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    div {
        display: flex;
    }

    p {
        flex: 1
    }
    button {
        width: 60px;
        font-size: 28px;
        cursor: pointer;
    }

    @media(max-width: 320px) {
        img {
            max-width: 100%;
            display: block;
            margin-bottom: 10px;
            border-radius: 10px;
            margin: auto;
        }
        
        div {
            display: flex;
            flex-direction: column;
        }
        
        button {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }


    }

`