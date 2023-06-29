import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
    showSucess,
    showWarning,
} from '../../../redux/reducers/components/overlays/toast'

// Primefaces
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';

// Bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

export default function Edit() {

    // Redux
    const isEdit = useSelector(state => state.editController.isEdit)
    const register = useSelector(state => state.editController.register)

    const dispatch = useDispatch()

    // Module States
    const [editForm, setEditForm] = React.useState({})
    const [detail1, setDetail1] = React.useState([
        {
            code: 1,
        },
        {
            code: 2,
        },
        {
            code: 3,
        },
    ])

    const [showDetails, setShowDetails] = React.useState(true);

    React.useEffect(() => {
        clearSearchForm()
        setEditForm(register)
    }, [])

    function clearSearchForm() {
        setEditForm({

        })
    }

    async function listResult() {

    }

    function save() {
        dispatch(showSucess())
    }

    function remove() {
        dispatch(showWarning('Removed'))
    }

    const moduleHeader = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <span style={style}>ModuleName</span>
            </div>
        )
    }

    const searchPanelTemplate = (options) => {
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>{isEdit ? 'Edit' : 'New'}</span>
            </div>
        );
    };

    const listPanelTemplate = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>Details</span>
            </div>
        );
    };

    return (
        <>
            <Panel
                headerTemplate={moduleHeader}
                style={{
                    width: '95vw',
                }}
            >
                <Container className='flex flex-column gap-4'>
                    <Row>
                        <Panel
                            headerTemplate={searchPanelTemplate}
                        >
                            <Container>
                                <TabView>
                                    <TabPanel header="Principal">
                                        <Row>
                                            <Col>
                                                <div className="flex flex-column align-items-start gap-1">
                                                    <label htmlFor="field">Text</label>
                                                    <InputText
                                                        id="field"
                                                        className="w-full p-inputtext-sm"
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="flex flex-column align-items-start gap-1">
                                                    <label htmlFor="field">KeyFilter</label>
                                                    <InputText
                                                        id="field"
                                                        keyfilter="int"
                                                        className="w-full p-inputtext-sm"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                    <TabPanel header="Sub I">
                                        <Row>
                                            <Col>
                                                <div className="flex flex-column align-items-start gap-1">
                                                    <label htmlFor="field">Calendar</label>
                                                    <Calendar
                                                        onChange={(e) => { }}
                                                        dateFormat="dd/mm/yy"
                                                        className="w-full p-inputtext-sm" />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="flex flex-column align-items-start gap-1">
                                                    <label htmlFor="field">Dropdown</label>
                                                    <Dropdown
                                                        options={[]}
                                                        optionLabel="name"
                                                        placeholder="Select"
                                                        className="w-full p-inputtext-sm" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPanel>
                                </TabView>

                                <Row style={{ margin: '1rem' }}>
                                    <Col className='flex flex-wrap gap-3 justify-content-center align-items-center'>
                                        <Button
                                            type="button"
                                            severity='success'
                                            rounded
                                            icon="pi pi-save"
                                            tooltip="Save"
                                            tooltipOptions={{ position: 'bottom' }}    
                                            onClick={(e) => {
                                                save()
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            severity='help'
                                            rounded
                                            icon="pi pi-replay"
                                            tooltip="Restore"
                                            tooltipOptions={{ position: 'bottom' }}                                             
                                            onClick={(e) => {
                                                clearSearchForm()
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            severity='secondary'
                                            rounded
                                            icon="pi pi-arrow-left"
                                            tooltip="Return"
                                            tooltipOptions={{ position: 'bottom' }}                                            
                                            onClick={(e) => {
                                                clearSearchForm()
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            severity='danger'
                                            rounded
                                            icon="pi pi-trash"
                                            tooltip="Remove"
                                            tooltipOptions={{ position: 'bottom' }}                                             
                                            onClick={(e) => {
                                                remove()
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Panel>
                    </Row>
                    {isEdit &&
                        <Row>

                            <Panel
                                headerTemplate={listPanelTemplate}
                            >
                                <TabView>
                                    <TabPanel header="Detail 1">
                                        <DataTable
                                            value={detail1}
                                            size='small'
                                            showGridlines
                                            stripedRows
                                            paginator
                                            rows={10}
                                            selectionMode="single"
                                            onRowSelect={(e) => { console.log('teste') }}>
                                            <Column
                                                field="code"
                                                header="Column1"
                                                align={'right'} />
                                            <Column
                                                field="code"
                                                header="Column2"
                                                align={'center'} />
                                            <Column
                                                field="code"
                                                header="Column3"
                                                align={'left'} />
                                        </DataTable>
                                    </TabPanel>
                                </TabView>
                            </Panel>

                        </Row>
                    }
                </Container>
            </Panel>
        </>
    )
}