import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import BikeForm from "./components/BikeForm";
import BikeList  from "./components/BikeList";


function App(){
    return (
        <div className="container is-fluid">
            <CarForm/>
            <CarSearch/>
            <CarList/> 
            <CarValue/>
            <BikeForm/>
            <BikeList/>
        </div>
       
    )
}
export default App;