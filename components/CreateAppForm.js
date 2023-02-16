import { useReducer } from "react"

const formReducer = (state, event) => {
    return {       
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function NewAppForm() {

    const [formData, setFormData] = useReducer(formReducer, {})
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("testing");
        console.log(formData)
    }

    return (
        <form className = "grid lg:grid-cols-1 w-4/6 gap-4" onSubmit = {handleSubmit}>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="appDate">Date and Time: </label>
                <input type="datetime-local" onChange={setFormData} id = "appDate" name="appDate" className = "border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="notifyOn">Notifications start on: </label>
                <input type="date" onChange={setFormData} id = "notifyOn" name="notifyOn" className = "border w-full px-5 py-3 focus:outline-none rounded-md"></input>
            </div>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="game"> Game: </label>
                <input type="text" onChange={setFormData} id = "game" name="game" className = "border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Fortnite" ></input>
            </div>
            <div className = "input-type">
            <label className = "text-gray-200" htmlFor="victimsDrop"> Victims: </label>
                <input type="text" onChange={setFormData} id = "victimsDrop" name="victimsDrop" className = "border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Teddy" ></input>
            </div>
            <button className = "justify-center text-md w-2/6 bg-green-600 text-gray-200 px-2 py-1 roundedmd hover:bg-gray-100 hover:border-green-600 hover:text-green-600">Create</button>
        </form>
    )
}