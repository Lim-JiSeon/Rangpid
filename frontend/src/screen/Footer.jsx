import styled from "styled-components";

const Style = {
    Footer: styled.footer`
        width: 100%;
        height: 77px;
        line-height: 77px;
        position: absolute;
        clear: left;
        float: left;
        left: 0;
        bottom: 0px;
        background-color: var(--main-background-color);
        color: var(--sub-txt-color);
        font-weight: bold;
        text-align: center;
        font-size: var(--semi-content-font-size);
    `
}

function Footer() {
    return (
        <Style.Footer>
            랑피드
        </Style.Footer>
    );
}

export default Footer;