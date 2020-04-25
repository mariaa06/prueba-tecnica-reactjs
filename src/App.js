import React from 'react';

class AwesomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            idcard: "",
            date: "",
            email: "",
            gituser: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="container">
                <div className="formcontainer">
                    <form>
                        <label htmlFor="name">Nombre/s</label>
                        <input name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="lastname">Apellido/s</label>
                        <input name="lastname" id="lastname" type="text" value={this.state.lastname} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="idcard">Cedula</label>
                        <input name="idcard" id="idcard" type="text" value={this.state.idcard} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="date">Fecha de nacimiento</label>
                        <input name="date" id="date" type="date" value={this.state.date} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="gituser">Usuario en GitHub</label>
                        <input name="gituser" id="gituser" type="text" value={this.state.gituser} onChange={this.handleChange} />
                        <br />
                        <input type="submit" value="Enviar" className="btn btn-light text-center"/>
                    </form>
                </div>
            </div>
        );
    }
}
export default AwesomeForm;