import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

// Bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

export default function List() {

    // Module States
    const [searchForm, setSearchForm] = React.useState({})
    const [items, setItems] = React.useState([
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
    const [expandedRows, setExpandedRows] = React.useState(null);
    const [showResult, setShowResult] = React.useState(false);

    React.useEffect(() => {
        clearSearchForm()
    }, [])

    function clearSearchForm() {
        setSearchForm({

        })

        setShowResult(false)
    }

    async function listResult() {

        setShowResult(true)
    }

    function goNewItem() {

    }

    function editItem() {

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
                <span className={titleClassName} style={style}>Search</span>
            </div>
        );
    };

    const listPanelTemplate = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>Result</span>
            </div>
        );
    };

    const rowExpansionTemplate = (data) => {
        return (
            <Card
                subTitle={`Detail: ${data.code}`}
            >
                <Container>
                    <Row className="flex align-items-start gap-1">
                        <Col>
                            <div className="flex flex-column align-items-start gap-1">
                                <label htmlFor="field">Text</label>
                                <InputText
                                    id="field"
                                    className="p-inputtext-sm"
                                    disabled={true}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="flex flex-column align-items-start gap-1">
                                <label htmlFor="field">Text</label>
                                <InputText
                                    id="field"
                                    className="p-inputtext-sm"
                                    disabled={true}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Card>
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

                                <Row style={{ margin: '1rem' }}>
                                    <Col className='flex flex-wrap gap-3 justify-content-center align-items-center'>
                                        <Button
                                            type="button"
                                            rounded
                                            icon="pi pi-search"
                                            onClick={(e) => {
                                                listResult()
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            severity='help'
                                            rounded
                                            icon="pi pi-filter-slash"
                                            onClick={(e) => {
                                                clearSearchForm()
                                            }}
                                        />
                                        <Button
                                            type="button"
                                            severity='success'
                                            rounded
                                            icon="pi pi-plus"
                                            onClick={(e) => {

                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Panel>
                    </Row>
                    {showResult &&
                        <Row>

                            <Panel
                                headerTemplate={listPanelTemplate}
                            >
                                <DataTable
                                    value={items}
                                    size='small'
                                    showGridlines
                                    stripedRows
                                    paginator
                                    rows={10}
                                    selectionMode="single"
                                    expandedRows={expandedRows}
                                    onRowToggle={(e) => setExpandedRows(e.data)}
                                    rowExpansionTemplate={rowExpansionTemplate}
                                    onRowSelect={(e) => { console.log('teste') }}>
                                    <Column
                                        header="More"
                                        expander={true}
                                        style={{ width: '5rem' }}
                                        align={'center'} />
                                    <Column
                                        field="code"
                                        header="Resume"
                                        align={'center'} />
                                </DataTable>
                            </Panel>

                        </Row>
                    }
                </Container>
            </Panel>
        </>
    )
}