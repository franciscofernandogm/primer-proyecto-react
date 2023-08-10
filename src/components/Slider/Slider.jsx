import './Slider.css'

export function Slider({totalPaginas,changePage,paginaActual}){
    const allPaginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);
    return(
        <>
            <nav className="slider">
                <ul>
                    <li><button onClick={()=>changePage(paginaActual.pagina-1)} disabled={paginaActual.pagina === 1 || paginaActual.isFiltered===true}><i className="fa fa-angle-left"></i></button></li>
                    {allPaginas.map(paginas => (
                        <li key={paginas}><button onClick={()=>changePage(paginas)} disabled={paginaActual.pagina === paginas || paginaActual.isFiltered===true}>{paginas}</button></li>
                    ))}
                    <li><button onClick={()=>changePage(paginaActual.pagina+1)} disabled={paginaActual.pagina === totalPaginas || paginaActual.isFiltered===true}><i className="fa fa-angle-right"></i></button></li>
                </ul>
            </nav>
        </>
    )
}