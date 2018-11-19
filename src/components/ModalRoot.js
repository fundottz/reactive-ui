import React from 'react';
import { connect } from 'react-redux'
import OrderDetailDialog from './Order/OrderDetailDialog'

export const ORDER_DETAIL = 'ORDER_DETAIL';

const MODAL_COMPONENTS = {
  ORDER_DETAIL: OrderDetailDialog
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> 
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />;
}

function mapStateToProps (state) {
  return {
    modalProps: state.modal.modalProps,
    modalType: state.modal.modalType,
  }
}

export default connect(mapStateToProps)(ModalRoot)