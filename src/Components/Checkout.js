import React from 'react';

export default class Checkout extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        creditCard: '',
        zipCode: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {total} = this.props
        const {firstName, lastName, email, zipCode, creditCard} = this.state;
        if(!firstName || !lastName || !email){
            window.alert('Input is not valid');
        } else if (creditCard.length !== 16){
            window.alert(`Input is invalid
            Credit card number is not valid`);
        } else if (zipCode.length !== 5){
            window.alert(`Input is invalid
            Zip code is not valid`);
        }
        window.alert(`Yay! Purchase complete!
                    You will be charged ${total}`)
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }
    render(){
        const {firstName, lastName, email, zipCode, creditCard} = this.state;
        return (
            <section>
                <h2>Checkout</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <p>
                        <input id='firstName' name='firstName' value={firstName} onChange={this.handleChange}/>
                    </p>
                    <label htmlFor='lastName'>Last Name</label>
                    <p>
                        <input id='lastName' name='lastName' value={lastName} onChange={this.handleChange}/>
                    </p>
                    <label htmlFor='email'>Email</label>
                    <p>
                        <input id='email' name='email' value={email} onChange={this.handleChange}/>
                    </p>
                    <label htmlFor='creditCard'>Credit Card</label>
                    <p>
                        <input id='creditCard' name='creditCard' value={creditCard} onChange={this.handleChange}/>
                    </p>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <p>
                        <input id='zipCode' name='zipCode' value={zipCode} onChange={this.handleChange}/>
                    </p>
                    <button>Buy Now</button>
                </form>
            </section>
        )
    }
}
