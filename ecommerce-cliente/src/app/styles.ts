import styled from 'styled-components';

export const HeaderBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 124px;
    left: 0px;
    top: 0px;
    background: linear-gradient(1.02deg, #FC0B0D -17.21%, rgba(74, 153, 211, 0) 75.91%), #FFFFFF;
    opacity: 0.2;
    box-shadow: 0px 4px 16px rgba(75, 0, 129, 0.26);
    transform: rotate(-180deg);
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    width: 1075px;
    height: 60px;
    left: 238px;
    top: 32px;
`;

export const HeaderTitle = styled.div`
    align-items: center;
    width: 261px;
    height: 60px;

    h1 {
        color: #4A99D3;
        margin: 0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    width: 350px;
    height: 30px;
    gap: 80px;
    align-items:center;
    justify-content: center;

    button {
        border-style: none;
        display: flex;
        background: transparent;
        align-items:center;
        
        &:hover {
            cursor: pointer;
        }

        span {
            display: flex;
            gap: 5px;
            align-items: center;

            p {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 27px;

                color: #0F001A;
            }
        }
    }

    .RegisterLogin {
        position: relative;
        height: 100%;
        padding: 0;
    }

    .Sell {
        position: relative;
        height: 100%;
        padding: 0;
    }
`;

export const Footer = styled.footer`

`;