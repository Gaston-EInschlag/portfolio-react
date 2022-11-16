import "./Contact.css";
import React from "react";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";

const Contact = () => {

const { register, formState:{ errors }, watch, handleSubmit } = useForm("");
const onSubmit = (data) => {
    console.log(data);
}

return (

<Container fluid className="formContainer">    

<form className="form" onSubmit={handleSubmit}>
<Container fluid>
<label>Name</label>
<input type = "text" {...register('Name')}/>
</Container>

<Container fluid>
<label>Company</label>
<input type = "text" {...register('Company')} />
</Container>

<Container fluid>
<label>Phone number</label>
<input type = "text" {...register('Phone number')}/>
</Container>

<Container fluid>
<label>Mail</label>
<input type = "text" {...register('Mail',
{required: true}
)}/>
</Container>

<Container fluid>
<label>Comments</label>
<input type = "text" />
</Container>

<Container fluid>
<input type = "submit" value ="Send"/>
</Container>

</form>

</Container>
);
}

export default Contact;
