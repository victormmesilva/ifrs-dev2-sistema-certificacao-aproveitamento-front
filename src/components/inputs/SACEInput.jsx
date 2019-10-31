import React from 'react';
import { Form } from 'react-bootstrap';

export default function SACEInput(props) {
    const {
        label,
        placeholder,
        onChange,
        value,
        onError,
        onErrorMessage,
    } = props;

    return (
        <Form.Group>
            <Form.Label className="mb-1">
                {label}
            </Form.Label>
            <Form.Control 
                type="text"  
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {onError && 
                <Form.Text className="text-danger">
                    {onErrorMessage}
                </Form.Text>
            }
        </Form.Group>
    );
}
