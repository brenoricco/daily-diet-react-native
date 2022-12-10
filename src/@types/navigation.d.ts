import { MealDTO } from "@components/Meal";
import { ImageSourcePropType } from "react-native";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistics: undefined;
            new: undefined;
            feedback: {
                title: string;
                message: string;
                imagePath: ImageSourcePropType
            };
            details: {
                meal: MealDTO;
            }
        }
    }
}