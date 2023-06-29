import React from 'react'

// Router Dom
import { useNavigate } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeLeftSidebar } from '../../../../redux/reducers/components/overlays/sidebar/left'
import { setPage } from '../../../../redux/reducers/components/pages'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { SlideMenu } from 'primereact/slidemenu';
import { Card } from 'primereact/card'

// Routes
import { routes } from '../../../../routes'

// Components
import MenuParameters from './menu'

export default function LeftSidebar() {

    // Redux
    const visible = useSelector(state => state.leftSidebarView.value)
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)
    const dispatch = useDispatch()

    // Router Dom
    const navigate = useNavigate()

    // Component States
    const [hour, setHour] = React.useState(null)

    React.useEffect(() => {
        // Atualizar a hora a cada segundo
        const intervalId = setInterval(updateDisplayHour, 1000);

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, [])

    const modelMenu = (routes) => (
        MenuParameters.departments
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((department, idx) => ({
                ...department,
                items: MenuParameters.operations
                    .sort((a, b) => a.label.localeCompare(b.label))
                    .map((operation, idx) => ({
                        ...operation,
                        items: routes
                            .filter(route => route.department === department.label && route.operation === operation.label)
                            .sort((a, b) => a.label.localeCompare(b.label))
                            .map(route => ({
                                ...route,
                                icon: 'pi pi-angle-right',
                                command: () => {
                                    if (navigationMode === 'monopage') {
                                        dispatch(setPage(route.component))
                                    }
                                    else {
                                        navigate(route.path)
                                    }

                                    dispatch(closeLeftSidebar())
                                }
                            }))
                    }))
            }))
    )

    function updateDisplayHour() {
        const currentDate = new Date();
        const currentHour = currentDate.getHours().toString().padStart(2, '0');
        const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');
        const currentSecond = currentDate.getSeconds().toString().padStart(2, '0');
      
        setHour(`${currentHour}:${currentMinute}:${currentSecond}`);
    }

    return (
        <Sidebar
            visible={visible}
            position="left"
            onHide={() => dispatch(closeLeftSidebar())}>

            <>
                <Card
                    title='System Menu'
                    subTitle={`${hour}`}
                    className='w-full h-full'
                >
                    <SlideMenu
                        model={modelMenu(routes)}
                        viewportHeight={375}
                        menuWidth={275}
                        className='w-full h-full' />
                </Card>
            </>
        </Sidebar>
    )
}