import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@utils/dtos/MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function editMeal(meal: MealDTO) {
    try {
        
        const storagedMeals = await getAllMeals();
        var storagedByDate = storagedMeals.filter(item => item.date === meal.date)[0];
        
        if(storagedByDate) {
            const filteredStoragedMeals = storagedMeals.filter(item => item.date !== meal.date);

            storagedByDate.data.map(item => {
                if(item.id === meal.id) {
                    item.name = meal.name;
                    item.description = meal.description;
                    item.hour = meal.hour;
                    item.date = meal.date;
                    item.status = meal.status;
                }                                       
            });

            const storage = JSON.stringify([...filteredStoragedMeals, storagedByDate]);
            await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        }

    } catch (error) {
        throw error;
    }
}