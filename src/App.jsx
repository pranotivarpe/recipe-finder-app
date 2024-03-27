// Importing necessary dependencies from React, styled-components, axios, and Material-UI
import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// Importing styled components for header
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./components/headerComponent";

// Importing styled components for recipe list and individual recipe
import {
  RecipeListContainer,
  RecipeContainer,
  RecipeName,
  CoverImage,
  IngredientsText,
  SeeMoreText,
} from "./components/RecipeComponent";

// Styled component for a placeholder image
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

// Constants for API credentials
const APP_ID = "d78f6e9a";
const APP_KEY = "9d5a68f7debc4a75353a6e8736f5a5bd";

// Styled component for the main container
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Functional component for displaying individual recipe details in a dialog
const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;

  return (
    <>
      {/* Dialog for displaying ingredients */}
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr key={ingredientObj.text}>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          {/* Button to view more details of the recipe */}
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          {/* Button to close the dialog */}
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      {/* Container for displaying individual recipe */}
      <RecipeContainer>
        {/* Image of the recipe */}
        <CoverImage src={recipeObj.image} />
        {/* Name of the recipe */}
        <RecipeName>{recipeObj.label}</RecipeName>
        {/* Button to display ingredients in a dialog */}
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        {/* Button to view complete recipe details */}
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

// Main App component
function App() {
  // State for storing timeout ID and recipe list
  const [timeOutId, updateTimeOutId] = useState();
  const [recipeList, updaterecipeList] = useState([]);

  // Function to fetch recipes from the API
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updaterecipeList(response.data.hits);
  };

  // Function to handle text input change and initiate recipe search
  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeOutId(timeOut);
  };

  return (
    <Container>
      {/* Header component */}
      <Header>
        {/* Component for displaying app name and icon */}
        <AppNameComponent>
          <AppIcon src="Logo.svg" />
          Recipe Finder
        </AppNameComponent>
        {/* Component for search input */}
        <SearchComponent>
          <SearchIcon src="searchicon.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      {/* Container for displaying list of recipes */}
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
          ))
        ) : (
          // Placeholder when no recipes are available
          <Placeholder src="Logo.svg" />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
