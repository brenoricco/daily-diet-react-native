import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { useTheme } from "styled-components";
import { Container} from "./styles";

import feedbackPositiveImg from '@assets/PositiveFeedback.png';
import feedbackNegativeImg from '@assets/NegativeFeedback.png';
import { Form } from "@components/Form";
import { MealDTO } from "@utils/dtos/MealDTO";
import { editMeal } from "@storage/meal/editMeal";

type RouteParams = {
    meal: MealDTO;
}

export function Edit() {
    const [mealToEdit, setMealToEdit] = useState<MealDTO>();
    const route = useRoute();
    const { meal } = route.params as RouteParams;
    

    const theme = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        setMealToEdit(meal);
    }, [])

    function navigateToFeedback(item: MealDTO) {
        if(item.status === true) {
            const positiveFeedback = {
                title: 'Continue assim!',
                titleColor: theme.COLORS.GREEN_DARK,
                message: 'Você continua dentro da dieta. Muito bem!',
                imagePath: feedbackPositiveImg
            }
            return navigation.navigate('feedback', positiveFeedback);
        } 
        const negativeFeedback = {
            title: 'Que pena!',
            titleColor: theme.COLORS.RED_DARK,
            message: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
            imagePath: feedbackNegativeImg
        }
        return navigation.navigate('feedback', negativeFeedback);
    }

    async function saveEdits(item: MealDTO) {
        item.id = mealToEdit?.id;
        await editMeal(item);
        return navigateToFeedback(item);
    }

    return (
        <Container>
            <Header 
                title="Editar refeição" 
                color={theme.COLORS.GRAY_200}
                backgroundColor={theme.COLORS.GRAY_500}
            />
            <Form 
                data={meal}
                button={{
                    icon:'edit',
                    name:'Salvar alterações'
                }}
                onPress={saveEdits}
            />
        </Container>
    );
}