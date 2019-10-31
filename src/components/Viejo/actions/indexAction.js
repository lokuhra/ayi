export function  abrirNavbar() {
    return dispatch => {
        dispatch({type:'CAMBIAR_ESTADO_NAVBAR', payload: false})
    }
}

export function  cerrarNavbar() {
    return dispatch => {
        dispatch({type:'CAMBIAR_ESTADO_NAVBAR', payload: true})
    }
}

export function  abrirSidebar() {
    return dispatch => {
        document.body.classList.add("no-scroll");
        dispatch({type:'CAMBIAR_ESTADO_SIDEBAR', payload: true})
    }
}

export function  cerrarSidebar() {
    return dispatch => {
        document.body.classList.remove("no-scroll");
        dispatch({type:'CAMBIAR_ESTADO_SIDEBAR', payload: false})
    }
}