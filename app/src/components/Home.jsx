import React from 'react'
import Divider from "@mui/material/Divider";

const Home = () => {
  return (
    <div>
        <h1>Simple Omelette Recipe</h1>
        <h3 style={{fontWeight: 'normal'}}>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs<br/>
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</h3>

        <p style={{backgroundColor: "#fff7fc", padding:  "10px"}}>
            <h3 style={{color: "#82405d"}}>Preparation time</h3>
            <ul>
                <li><b>Total: </b>Approximately 10 minutes</li>
                <li><b>Preparation: </b>5 minutes</li>
                <li><b>Cooking: </b>5 minutes</li>
            </ul>
        </p>

        <h2 style={{color: "#82405d"}}>Ingredients</h2>
        <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional filling: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
        <Divider/>

        <h2 style={{color: "#82405d"}}>Instructions</h2>
        <ol>
            <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they<br/>well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the<br/>pan to ensure the eggs evenly coat the surface.</li>
            <li>Add fillings(optional): When the eggs begin to set at the edges but are still slightly<br/>runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it<br/> over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
        </ol>


    </div>
  )
}

export default Home