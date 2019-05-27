import React  from 'react';
import Modal from 'react-modal';


const RemoveExpenseModal = ({selectedExpense, onRemoveConfirm, handleCancelRemove})=>{
    
    return(
        <Modal
            ariaHideApp={false}
            isOpen={!!selectedExpense}
            onRequestClose={handleCancelRemove}
            constentLabel="Remove this expense?"
            coloseTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Remove this expense?</h3>
            <button className="button" 
            onClick={onRemoveConfirm}>Remove</button>

        </Modal>
)};

export default RemoveExpenseModal;