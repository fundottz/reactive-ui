const initialState = {
  modalType: null,
  modalProps: {}
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      console.log('show-modal-reducer');
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}