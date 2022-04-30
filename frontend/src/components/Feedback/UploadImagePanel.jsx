import Form from 'react-bootstrap/Form'

const UploadImagePanel = ()=>{
    return(
        <div style = {{display: 'flex', justifyContent: 'center', margin: 12}}>
        <Form.Group controlId="formFileSm" className="mb-3">
         <Form.Control type="file" size="sm" />
        </Form.Group>
        </div>
    )
}

export default UploadImagePanel;