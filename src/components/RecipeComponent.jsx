// Importing styled components for RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsText, and SeeMoreText
import styled from "styled-components";

// Styled component for container of list of recipes
export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
  padding: 30px;
`;

// Styled component for container of individual recipe
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

// Styled component for cover image of the recipe
export const CoverImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

// Styled component for name of the recipe
export const RecipeName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

// Styled component for displaying ingredients text
export const IngredientsText = styled.div`
  font-size: 18px;
  border: solid 1px green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;

// Styled component for displaying 'See more' text
export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;
