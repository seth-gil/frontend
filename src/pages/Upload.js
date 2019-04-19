import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ImageInput from '../components/ImageInput';
import Col from "react-bootstrap/Col";

export default class Upload extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			0
		)
	}
}

// export default class Upload extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       files: null,
//       framerate: 15,
//       id: props.id
//     };
//   }

//   handleFileSelect = (event) => {
//     console.log("e.t.f", event.target.files);
//     this.setState({files: event.target.files});
//   }

//   handleSubmit = (event) => {
//     var _this = this;

//     event.preventDefault();
		
//     var formData = new FormData();
//     var fileList = this.state.files;

//     for(var index = 0; index < fileList.length; index++) {
//       formData.append("files[]", fileList.item(index), index + ".jpg");	
//     }
//     formData.append("id", this.state.id);
//     formData.append("framerate", this.state.framerate);
	
//     fetch("http://ec2-54-205-66-183.compute-1.amazonaws.com:5000/api/v1/upload", {
//       method: 'POST',
//       body: formData	
//     }).then(function() {
//       // Nothing returned
//       _this.props.success();
//     }).catch(function(err) {
//       console.log("Error", err);
//     });
//   }

//   handleFramerateSelect(event) {
//     let sel = event.target;
//     this.setState({id: sel.options[sel.selectedIndex].value});
//   }

//   render() {
//     console.log(this.state.id);
//     return (
//       <section>
//         <h2>Upload Images</h2>
//         <p>Upload your images to start the animation process.</p>
//         <Form onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data">
//           <Form.Row>
//             <Col sm>
//               <Form.Group>
//                 <Form.Label>Choose images</Form.Label>
//                 <ImageInput change={this.handleFileSelect.bind(this)} />
//               </Form.Group>
//             </Col>
//             <Col sm>
//               <Form.Group>
//                 <Form.Label>Choose framerate (fps)</Form.Label>
//                 <Form.Control as="select" onChange={this.handleFramerateSelect.bind(this)}>
//                   <option value="15">15</option>
//                   <option value="20">20</option>
//                   <option value="25">25</option>
//                   <option value="30">30</option>
//                 </Form.Control>
//               </Form.Group>
//             </Col>
//           </Form.Row>
//           <Button variant="primary" type="submit">
//             Add Media
//           </Button>
//         </Form>
//       </section>
//     );
//   }
// }