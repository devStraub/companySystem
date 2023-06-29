import React from 'react'

// Components
import RightSidebar from './sidebar/right'
import LeftSidebar from './sidebar/left'
import Modal from './dialog/modal'
import DialogConfirm from './dialog/confirm'
import Toasts from './toast'

export default function Overlay(){

    return(
        <>  
            <LeftSidebar/>
            <RightSidebar/>  
            <Modal/>
            <DialogConfirm/>
            <Toasts/>
        </>
    )
}