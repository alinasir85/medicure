import React , {useRef} from "react"
import {Form, Card, Button} from 'react-bootstrap'

export default function SignUp(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up!</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" inputRef={"emailRef"} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" inputRef={"passwordRef"} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Re-Type Password</Form.Label>
                            <Form.Control type="password" inputRef={"passwordConfirmRef"} required/>
                        </Form.Group>
                        <Button className="w-100 mt-4" type={"submit"}>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in!
            </div>
        </>
    )
}