import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Emoji from "../Emoji";
import Card from "../Card";
import {Container, Typography} from "@mui/material";
import FormulaField from "../FormulaField";
import {IElement} from "../../interfaces/element";
import {RootState} from "../../store";
import {recipes} from "../../store/recipes";
import {writeNewElement} from "../../store/elementsSlice";
import {clearAll, clearElement, IngredientsSlice, maxIngredients, setElement} from "../../store/ingredientsSlice";

function PlayingField() {
    const ingredients: IngredientsSlice = useSelector((state: RootState) => state.ingredients);
    const elements: IElement[] = useSelector((state: RootState) => state.elements.elements);
    const countOpened: number = useSelector((state: RootState) => state.elements.openRecipes);
    const dispatch = useDispatch();

    const getFirstEmptyIndex = (ingredients: IngredientsSlice): number => {
        for (let i = 0; i < ingredients.length; i++) {
            if (!ingredients[i].id) {
                return i;
            }
        }
        alert(`Можно выбрать максимум ${maxIngredients}`);
        throw new Error('Максимальное допустимое количество ингредиентов');
    }

    const handleDelete = (key: number) => {
        dispatch(clearElement(key))
    }

    const addElementToFormula = React.useCallback((id: string) => {
        const key = getFirstEmptyIndex(ingredients);
        const findElem: IElement = elements.filter(elem => elem.id === id)[0];

        dispatch(setElement({key: key, element: findElem}));
    }, [ingredients]);

    const getIds = (): string[] => {
        const ids: string[] = [];

        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].id) {
                ids.push(ingredients[i].id);
            }
        }

        return ids;
    }

    const searcher = (ids: string[]) => {
        ids.sort();

        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].elements.length !== ids.length) continue;
            if (JSON.stringify(ids) === JSON.stringify(recipes[i].elements.sort())) {
                return recipes[i];
            }
        }

        return alert('Такого рецепта нет');
    };

    const searchRecipe = React.useCallback(() => {
        const ids = getIds();

        if (ids.length < 1) return alert('Выбери ингредиенты');
        if (ids.length === 1) return alert('Добавь еще один ингредиент');

        const newElement = searcher(ids);

        dispatch(writeNewElement(newElement));
        dispatch(clearAll());
    }, [ingredients]);

    return (
        <>
            <Typography variant='h6'>{countOpened + '/' + recipes.length}</Typography>
            <Container>
                {elements.map(({id, name, icon}: IElement) => (
                    <Card key={id} id={id} title={name} onClick={() => addElementToFormula(id)}>
                        <Emoji label={name} symbol={icon}/>
                    </Card>
                ))}
            </Container>
            <FormulaField
                ingredients={ingredients}
                deleteIngredient={handleDelete}
                searchRecipe={searchRecipe}
            />
        </>
    )
}

export default React.memo(PlayingField)
