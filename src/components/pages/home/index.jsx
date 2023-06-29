import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

// Bootstrap
import {
    Container,
    Row,
    Col,
    Carousel,
} from 'react-bootstrap';

// Icons
import {
    DiJava,
    DiReact,
    DiDatabase,
    DiMongodb,
    DiDocker,
} from "react-icons/di";

import Photo from '../../../resources/images/13937937_1207669349257383_272992765336949516_o.jpg'

export default function Home() {

    const language = useSelector(state => state.ConfigController.language)

    return (
        <>
            {/*
            <Container>
                <Row>
                    <Col>
                        <Card title="Title">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Title">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Title">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                    </Col>                    
                </Row>
            </Container>
            */}
        </>
    )
}