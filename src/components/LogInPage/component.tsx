import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import { CreateAccountCard } from '../CreateAccountCard/component';
import LogIn from '../LogIn';

export class LogInPage extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row >
                            <Col xs="12 offset-0" sm="6 offset-sm-3">
                                <LogIn />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6 offset-sm-3">
                                <CreateAccountCard />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div >
        );
    }
}
