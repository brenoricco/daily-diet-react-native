import { MealsListDTO } from "@utils/dtos/MealslListDTO";

function calculatePercentageInDiet(mealsList: MealsListDTO[]) {
    var countOfMeals = 0;
    var countOfPositiveMeals = 0;
    if(mealsList && mealsList.length) {
        mealsList.forEach(mealsOfDate => {
            countOfMeals += mealsOfDate.data.length;
            mealsOfDate.data.forEach(meal => {
                if(meal.status === true) {
                    countOfPositiveMeals += 1;
                }
            })
        })

        return (countOfPositiveMeals * 100)/countOfMeals;
    }
}

function calculateBestSequence(mealsList: MealsListDTO[]) {
    var bestSequence = 0;
    var lasBestSequence = 0;
    if(mealsList && mealsList.length) {
        mealsList.forEach(mealsOfDate => {
            mealsOfDate.data.forEach(meal => {
                if(meal.status === true) {
                   bestSequence++;
                } else if(bestSequence > lasBestSequence){
                    lasBestSequence = bestSequence;
                    bestSequence = 0;
                }
            })
        })
    }
    return bestSequence > lasBestSequence ? bestSequence : lasBestSequence;
}


function countTotalOfMeals(mealsList: MealsListDTO[]) {
    var countTotalOfMeals = 0;
    if(mealsList && mealsList.length) {
        mealsList.forEach(mealsOfDate => {
            countTotalOfMeals += mealsOfDate.data.length;
        })
    }
    return countTotalOfMeals;
}

function countInDietMeals(mealsList: MealsListDTO[]) {
    var countTotalOfMealsInDiet = 0;
    if(mealsList && mealsList.length) {
        mealsList.forEach(mealsOfDate => {
            mealsOfDate.data.forEach(meal => {
                if(meal.status === true) {
                    countTotalOfMealsInDiet++;
                }
            })
        })
    }
    return countTotalOfMealsInDiet;
}

function countOffDietMeals(mealsList: MealsListDTO[]) {
    var countTotalOffDietMeals = 0;
    if(mealsList && mealsList.length) {
        mealsList.forEach(mealsOfDate => {
            mealsOfDate.data.forEach(meal => {
                if(meal.status === false) {
                    countTotalOffDietMeals++;
                }
            })
        })
    }
    return countTotalOffDietMeals;
}

export { 
    calculatePercentageInDiet, 
    calculateBestSequence, 
    countTotalOfMeals, 
    countInDietMeals,
    countOffDietMeals
};