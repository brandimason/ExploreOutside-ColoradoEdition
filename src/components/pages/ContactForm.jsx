import '../../App.css';
import './Pages.css';

function ContactForm(){
    function handleSubmit(event){
        event.preventDefault()

        event.target.reset()
    }
    return (
        <div className="SomeContainer">
            <h1>Let&apos;s chat!</h1>
            <form onSubmit={handleSubmit} className="contact_form_container">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="message" placeholder="Message" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default ContactForm;