import Search from "./components/Search.jsx";
import {useState} from "react";
import FoodList from "./components/FoodList.jsx";
import Nav from "./components/Nav.jsx";
import "./app.css";
import Container from "./components/Container.jsx";
import InnerContainer from "./components/InnerContainer.jsx";
import FoodDetails from "./components/FoodDetails.jsx";

function App() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState('656329');

    return (
        <div className="App">
            <Nav/>
            <Search foodData={foodData} setFoodData={setFoodData}/>
            <Container>
                <InnerContainer>
                    <FoodList foodData={foodData} setFoodId={setFoodId}/>
                </InnerContainer>
                <InnerContainer>
                    <FoodDetails foodId={foodId} foodData={foodData}/>
                </InnerContainer>
            </Container>
        </div>
    )
}

export default App
