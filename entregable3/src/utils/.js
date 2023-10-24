//? CurrentPage = La pagina actual
//? residents = Arreglo total de residentes en la dimesnion actual
const paginationLogic = (currentPage, residents) => {
//! Excepcion para el primer render
 if(residents.length === 0) {
    return {
        pages: [1],
        residentsInPage: []
    }
 }

    //* La cantidad de residentes por pagina
    const RESIDENTS_PER_PAGE = 20

    //* Cantidad total de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)
    
    //* Residentes que se van a mostrar en la pagina
    const sliceEnd = RESIDENTS_PER_PAGE * currentPage
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    //* Generacion de arrglo que se van a mostrar
    const pages = []
    for (let i= 1; 1 <= totalPages; i++) {
        pages.push(i) 
    }

    return {
        residentsInPage, 
        pages,
    }
}

export { paginationLogic }