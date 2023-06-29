import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeConfirmDialog } from '../../../../redux/reducers/components/overlays/dialog/confirm'

// Primefaces
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

export default function DialogConfirm(){

    const toast = React.useRef(null);

    const visible = useSelector(state => state.dialogConfirmView.visible)
    const header = useSelector(state => state.dialogConfirmView.header)
    const message = useSelector(state => state.dialogConfirmView.message)
    const dispatch = useDispatch()           

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }    

    return(
        <>
            <Toast ref={toast} />
            <ConfirmDialog 
                visible={visible} 
                onHide={() => dispatch(closeConfirmDialog())} 
                message={message}
                header={header}
                icon="pi pi-exclamation-triangle" 
                accept={accept} 
                reject={reject} />     
        </>
    )
}