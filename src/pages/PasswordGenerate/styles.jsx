import { styled } from "styled-components";

export const BigContainer = styled.div`
    width: 80%;
    max-width: 400px;
    height: fit-content;

    padding: 1.5rem 1.5rem;
    box-shadow: inset 0 0 25px 2px #00000090;
    border-radius: 2rem;
    box-shadow: 0 0 25px 2px #0000005f;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`

export const GeneratePasswordContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const Screen = styled.div`
    padding: 2rem 1rem;
    width: 100%;
    box-shadow: inset 0 0 25px 2px #0000003d;
    border-radius: 0.5rem;
    background-color: #131212;
    color: #0466cf;
    font-weight: 700;
    letter-spacing: .5rem;
    text-align: center;
    font-size: 1.3rem;
    overflow: auto;
`

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;
`