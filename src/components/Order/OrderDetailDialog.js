import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hideModal } from 'actions/ModalActions';

const OrderDetailDialog = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Order #</ModalHeader>
      <ModalBody>
        Order body
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Отмена</Button>
        <Button color="primary" onClick={toggle}>Готово</Button>
      </ModalFooter>
    </Modal>
  );
};

OrderDetailDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch(hideModal());
    }
  }
}

export default connect(null, mapDispatchToProps)(OrderDetailDialog);