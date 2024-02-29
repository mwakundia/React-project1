import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';


function Form() {
  return (
    <Form>
        <h2>Form</h2><br></br>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Title</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Author</Form.Label>
                
                <Form.Control />
            </Form.Group>
        </Row>

        <FloatingLabel
            controlId="floatingTextarea"
            label="Body"
            className="mb-3"
            >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>

        <Button variant="primary" type="submit">
            Save Blog
        </Button>
    </Form>
  );
}

export default Form;
