import { styled } from "styled-components";

export const ActionButton = styled.button`
    background: none;
    border: none;
    border-radius: .3rem;

    border: 1px solid #FFFFFF;
    padding: 1rem .5rem;

    flex: 1 0 auto;
    cursor: pointer;

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