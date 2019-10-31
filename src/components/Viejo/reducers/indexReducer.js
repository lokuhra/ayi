const initialState = {
    showNav: true,
    transferenciaSidebarShow: false
};

export default function IndexReducer(state = initialState, action) {
    switch (action.type) {
        case 'CAMBIAR_ESTADO_NAVBAR':
            return { ...state, showNav: action.payload };
        case 'CAMBIAR_ESTADO_SIDEBAR':
            return { ...state, transferenciaSidebarShow: action.payload };
        default:
            return state;
    }
}