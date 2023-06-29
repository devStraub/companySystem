import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { showLeftSidebar } from '../../redux/reducers/components/overlays/sidebar/left'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../redux/reducers/components/pages';

// Primefaces
import { Button } from 'primereact/button';

// Icons
import { DiCode } from "react-icons/di";

// Components
import Home from '../pages/home';

export default function Header() {

    const language = useSelector(state => state.ConfigController.language)
    const authenticated = useSelector(state => state.AuthController.authenticated)
    const dispatch = useDispatch()

    return (
        <>
            <div className='header-left'>
                <Button 
                    icon="pi pi-bars"
                    text 
                    rounded
                    tooltip="Menu"
                    tooltipOptions={{ position: 'bottom' }}                    
                    onClick={() => dispatch(showLeftSidebar())} />
            </div>
            <div className='header-center'>
                <Button rounded text onClick={() => dispatch(setPage(<Home />))}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DiCode style={{ fontSize: '30px' }} />
                        <strong>DevStraub</strong>
                    </div>
                </Button>
            </div>
            <div className='header-right' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                    icon="pi pi-user"
                    text rounded
                    tooltip="Profile"
                    tooltipOptions={{ position: 'bottom' }}                       
                    onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}