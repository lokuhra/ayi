export function  mostrarNotificaciones() {
    return dispatch => {
        dispatch({type:'CAMBIAR_ESTADO_NOTIFICACIONES', payload: null})
    }
}