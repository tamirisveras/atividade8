import Link from
'next/link'
export default function NotFound() {
    return (
        <div>
            <h2>Não encontrado</h2>
            <p>Não foi possível encontrar o recurso solicitado</p>
            <Link href="/">retornar para Home</Link>
        </div>
    )
}