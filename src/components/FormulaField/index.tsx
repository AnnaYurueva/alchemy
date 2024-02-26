import React from "react";
import {Paper, Typography} from "@mui/material";
import Card from "../Card";
import Emoji from "../Emoji";
import SearchButton from "../SearchButton";
import {IngredientsSlice} from "../../store/ingredientsSlice";

interface IFormula {
    ingredients: IngredientsSlice
    deleteIngredient: (key:number) => void;
    searchRecipe: () => void;
}

function FormulaField({ingredients, deleteIngredient, searchRecipe}: IFormula) {
    const handleClick = (key: number) => {
        deleteIngredient(key)
    }

    return (
        <Paper sx={{
            width: '100vw',
            padding: '20px',
            gap: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            bottom: 0
        }}>
            {Array.from(ingredients.entries()).map(([key, {id, name, icon}]) => (
                <Card key={key} id={id} title={name} onClick={() => handleClick(key)}>
                    <Emoji label={name} symbol={icon}/>
                </Card>
            ))}
            <Typography variant="h3">&gt;</Typography>
            <SearchButton onClick={searchRecipe} />
        </Paper>
    )
}

export default React.memo(FormulaField)
