import * as React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import CreateAccountCard from './CreateAccountCard';
import LogIn from './LogIn';

class LogInPage extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Row >
                            <Col xs="12 offset-0" sm="4 offset-sm-4">
                                <LogIn />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="4 offset-sm-4">
                                <CreateAccountCard />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div >
        );
    }
}

export default LogInPage;