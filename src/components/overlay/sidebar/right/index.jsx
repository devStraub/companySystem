import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeRightSidebar } from '../../../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../../../redux/reducers/components/pages'
import { logOff } from '../../../../redux/reducers/auth'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menu } from 'primereact/menu';

export default function RightSidebar() {

    const visible = useSelector(state => state.rightSidebarView.value)
    const user = useSelector(state => state.AuthController.user)
    const dispatch = useDispatch()

    const menu = [
        {
            label: 'My Account', 
            command: () => {
                dispatch(closeRightSidebar())
            }           
        },
        {
            label: 'Quit', 
            command: () => {
                dispatch(logOff())
                dispatch(closeRightSidebar())
            }
        },        
    ]

    return (
        <Sidebar
            visible={visible}
            position="right"
            onHide={() => dispatch(closeRightSidebar())}>
            
            <div>
                <Card
                    title="Profile Menu"
                    subTitle={user.email}
                >
                    <Menu 
                        model={menu} 
                        className='w-full'
                    />
                </Card>
            </div>
            
        </Sidebar>
    )
}