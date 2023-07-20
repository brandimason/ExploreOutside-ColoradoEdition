function AddNewForm({handleSubmit}){
    return (
        <div className="addnewform_container">
            <h1>Add a new destination!</h1>
            <form onSubmit={handleSubmit} className="addnewform">
                <input type="text" name="name" placeholder='Name'/>
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="difficulty" placeholder="Difficulty" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddNewForm;