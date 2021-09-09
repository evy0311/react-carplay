import React, { Component } from 'react';
import './Dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Dashboard() {


    return (
        <div className="main">

            {/* The active "tab" */}
            <div className="active">

            </div>

            {/* Bottom navigation menu */}
            <div className="nav">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" size="lg">CarPlay</Button>{' '}
                    <Button variant="secondary"size="lg">Radio</Button>{' '}
                    <Button variant="secondary"size="lg">Climate</Button>{' '}
                    <Button variant="secondary"size="lg">Settings</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}