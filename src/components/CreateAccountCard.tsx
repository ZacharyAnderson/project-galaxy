import * as React from 'react';
import { Card, Container } from 'reactstrap';

class CreateAccountCard extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Container>
                    <Card>
                        New to Project-galaxy? Create an account.
                    </Card>
                </Container>
            </div>
        );
    }
}

export default CreateAccountCard;