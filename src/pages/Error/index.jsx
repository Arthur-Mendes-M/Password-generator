import { Link, useRouteError } from "react-router-dom"
import { PrettyCode } from "./styles"

export const Error = () => {
    const error = useRouteError()

    return (
    <>
        <div>
            <h1>Ops :/</h1>
            <p>Ocorreu algum erro. <PrettyCode>Erro {error.statusText}</PrettyCode></p>
        </div>
        
        <Link to="/">Voltar para a página principal</Link>
    </>
    )
}
