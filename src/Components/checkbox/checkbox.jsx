//Usage of checkbox: https://react-bootstrap.netlify.app/docs/forms/checks-radios
import Form from 'react-bootstrap/Form';

export const CheckBox = (props) => {
    return(
        <>
        <Form>
            <div key={`checkBox ${props.id}`} className="mb-3">
                <Form.Check id={props.id} label={props.text}>
                </Form.Check>

            </div>
        </Form>
        </>
    )
}