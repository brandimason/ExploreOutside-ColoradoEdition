function AddNewForm({handleSubmit}){
    return (
        <div className="SomeContainer">
            {/* <h3>Add a new destination:</h3> // header for when form appears*/}
            <form onSubmit={handleSubmit} className="contact_form_container">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="difficulty" placeholder="Difficulty" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddNewForm;