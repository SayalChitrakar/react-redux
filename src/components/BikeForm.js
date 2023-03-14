import { useDispatch,useSelector } from "react-redux";
import { changeBikeName,changeName } from "../store";
function BikeForm(){

    const dispatch = useDispatch();
    const {bikeName,bikeCost} = useSelector((state)=>{

        return {
            bikeName: state.bikeForm.bikeName,
            bikeCost: state.bikeForm.bikeCost
        }
    })

    const handleBikeNameChange = (event) => {
        dispatch(changeBikeName(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="car-form panel">
        <h4 className="subtitle is-3"> Add Bike</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" />
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded"/>
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>    
    </div>
    )
}

export default BikeForm;