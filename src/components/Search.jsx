import {useEffect, useState} from "react";
import styles from "./search.module.css";

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = "";
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza");

    useEffect(()=> {
        async function fetchFood() {
            const rest = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await rest.json();
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="text"/>
        </div>
    )
}