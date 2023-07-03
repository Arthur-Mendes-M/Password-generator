import { styled } from "styled-components";

export const ActionButton = styled.button`
    flex: 1 0 auto;

    &[data-action=generate]{
        border-color: #0466cf;
        background-color: #0466cf;
        color: #FFFFFF;

        &:hover {
            background: none;
            color: #0466cf;
        }
    }

    &[data-active=true] {
        color: #08c108;
        border-color: #08c108;
    }
`