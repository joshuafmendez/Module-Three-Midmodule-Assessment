import React,{useState} from 'react';

const Checkout = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [creditCard,setCreditCard] = useState('');
    const [zipCode,setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    You will be charged ${props.total}`)
    }
    const handleFName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleCCard = (e) => {
        setCreditCard(e.target.value)
    }
    const handleZCode = (e) => {
        setZipCode(e.target.value)
    }
    return (
        <section>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <p>
                    <input id='firstName' name='firstName' value={firstName} onChange={handleFName}/>
                </p>
                <label htmlFor='lastName'>Last Name</label>
                <p>
                    <input id='lastName' name='lastName' value={lastName} onChange={handleLName}/>
                </p>
                <label htmlFor='email'>Email</label>
                <p>
                    <input id='email' name='email' value={email} onChange={handleEmail}/>
                </p>
                <label htmlFor='creditCard'>Credit Card</label>
                <p>
                    <input id='creditCard' name='creditCard' value={creditCard} onChange={handleCCard}/>
                </p>
                <label htmlFor='zipCode'>Zip Code</label>
                <p>
                    <input id='zipCode' name='zipCode' value={zipCode} onChange={handleZCode}/>
                </p>
                <button>Buy Now</button>
            </form>
        </section>
    )
}

export default Checkout;

// export default class Checkout extends React.Component {
//     state = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         creditCard: '',
//         zipCode: '',
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const {total} = this.props
//         const {firstName, lastName, email, zipCode, creditCard} = this.state;
//         if(!firstName || !lastName || !email){
//             window.alert('Input is not valid');
//         } else if (creditCard.length !== 16){
//             window.alert(`Input is invalid
//             Credit card number is not valid`);
//         } else if (zipCode.length !== 5){
//             window.alert(`Input is invalid
//             Zip code is not valid`);
//         }
//         window.alert(`Yay! Purchase complete!
//                     You will be charged ${total}`)
//     }
//     handleChange = (e) => {
//         const {name, value} = e.target;
//         this.setState({[name]: value})
//     }
//     render(){
//         const {firstName, lastName, email, zipCode, creditCard} = this.state;
//         return (
//             <section>
//                 <h2>Checkout</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor='firstName'>First Name</label>
//                     <p>
//                         <input id='firstName' name='firstName' value={firstName} onChange={this.handleChange}/>
//                     </p>
//                     <label htmlFor='lastName'>Last Name</label>
//                     <p>
//                         <input id='lastName' name='lastName' value={lastName} onChange={this.handleChange}/>
//                     </p>
//                     <label htmlFor='email'>Email</label>
//                     <p>
//                         <input id='email' name='email' value={email} onChange={this.handleChange}/>
//                     </p>
//                     <label htmlFor='creditCard'>Credit Card</label>
//                     <p>
//                         <input id='creditCard' name='creditCard' value={creditCard} onChange={this.handleChange}/>
//                     </p>
//                     <label htmlFor='zipCode'>Zip Code</label>
//                     <p>
//                         <input id='zipCode' name='zipCode' value={zipCode} onChange={this.handleChange}/>
//                     </p>
//                     <button>Buy Now</button>
//                 </form>
//             </section>
//         )
//     }
// }
