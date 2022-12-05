import * as React from 'react';
import { Modal, Button } from "react-bootstrap";


const ModalComponent = ({ showModal, showmodal, downloadToExcel, chooseFileName }: any) => {
    return (
        <>
            <Modal show={showModal} onHide={showmodal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter File Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" onChange={e => { chooseFileName(e) }} placeholder="Enter File Name..." />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={downloadToExcel}>
                        Download
                    </Button>
                    <Button variant="secondary" onClick={showmodal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal></>
    )
};

export default ModalComponent;
