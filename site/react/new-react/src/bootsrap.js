import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class Bootsrap extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    handleModal() {
        this.setState({ show: !this.state.show })

    }
    render() {
        return (
            <div>
                <Button onClick={() => this.handleModal()}>Clickme</Button>
                <Modal show={!this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>this is heading</Modal.Header>
                    <Modal.Body>this is body</Modal.Body>
                    <Modal.Footer>this is footer</Modal.Footer>
                    <Button onClick={() => this.handleModal()}>Save</Button>
                    <Button onClick={() => this.handleModal()}>Close</Button>
                </Modal>

            </div>
        )
    }
}
