import React from "react";

class ContactInfo extends Component {
    status = {
        name: "",
        email: "",
        message: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
        handleFormSubmit = event => {
            event.preventDefault();
            alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`);
            this.setState({ username: "", password: "" });
        };
        render(){
            return (
                <div>
                    <form>
                        <p>Name: {this.state.name}</p>
                        <p>Email: {this.state.email}</p>
                        <p>Message:{this.state.message}</p>
                        <input
                            type="text"
                            placeholder="Name"
                            name="Name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="Email"
                            placeholder="Email"
                            name="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <imput
                            type="text"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.state.handleInputChange}
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
            );
        };
    }
    export default ContactInfo;