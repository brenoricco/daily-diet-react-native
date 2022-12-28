import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@utils/dtos/MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMeal(meal: MealDTO) {
    try {

        const storagedMeals = await getAllMeals();
        var storagedByDate = storagedMeals.filter(item => item.date === meal.date)[0];
        
        if(storagedByDate) {
            const filteredStoragedMeals = storagedMeals.filter(item => item.date !== meal.date);
            storagedByDate.data = storagedByDate.data.filter(item => item.id != meal.id);
            if(storagedByDate.data.length === 0) {
                const storage = JSON.stringify([...filteredStoragedMeals]);
                await AsyncStorage.setItem(MEAL_COLLECTION, storage);
            } else {
                const storage = JSON.stringify([...filteredStoragedMeals, storagedByDate]);
                await AsyncStorage.setItem(MEAL_COLLECTION, storage);
            }
            
        }

    } catch (error) {
        throw error;
    }
}