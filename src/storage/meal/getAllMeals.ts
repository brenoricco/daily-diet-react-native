import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealsListDTO } from "@utils/dtos/MealslListDTO";

export async function getAllMeals() {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        const meals: MealsListDTO[] = storage ? JSON.parse(storage) : [];

        return meals;
    } catch (error) {
        throw error;
    }
}