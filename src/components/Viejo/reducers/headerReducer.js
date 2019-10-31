const initialState = {
    showNotificaciones: false
};

export default function HeaderReducer(state = initialState, action) {
    switch (action.type) {
        case 'CAMBIAR_ESTADO_NOTIFICACIONES':
            return { ...state, showNotificaciones: !state.showNotificaciones };
        default:
            return {...state};
    }
}