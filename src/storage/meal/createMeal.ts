import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@utils/dtos/MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function createMeal(newMeal: MealDTO) {
    try {

        const storagedMeals = await getAllMeals();
        var storagedByDate = storagedMeals.filter(item => item.date === newMeal.date)[0];
        
        if(storagedByDate) {
            const filteredStoragedMeals = storagedMeals.filter(item => item.date !== newMeal.date);
            newMeal.id = storagedByDate.data.length + 1;
            storagedByDate.data.push(newMeal);
            const storage = JSON.stringify([...filteredStoragedMeals, storagedByDate]);
            await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        } else {
            newMeal.id = 1;
            const storage = JSON.stringify([...storagedMeals, { id: storagedMeals.length + 1, date: newMeal.date, data: [newMeal] }]);
            await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        }

    } catch (error) {
        throw error;
    }
}