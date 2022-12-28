import { useNavigation } from "@react-navigation/native";
import { MealsListDTO } from "@utils/dtos/MealslListDTO";
import { calculatePercentageInDiet } from "@utils/functions/statisticsCalculate";
import { useEffect, useState } from "react";
import { ArrowContent, ArrowIcon, Container, Content, PercentNumber, PercentText } from "./styles";

type Props = {
    mealsList: MealsListDTO[];
}

export function PercentCard({ mealsList }: Props) {

    const [ percentInDiet, setPercentInDiet ] = useState<number>();


    useEffect(() => {
        const percentageCalculated = calculatePercentageInDiet(mealsList);
        setPercentInDiet(percentageCalculated);
    }, [mealsList]);

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('statistics');
    }

    return (
        <Container>           
            <Content>
                <PercentNumber>{percentInDiet?.toFixed(2)}%</PercentNumber>
                <PercentText>das refeições dentro da dieta</PercentText>
            </Content>       
            <ArrowContent onPress={handleNavigate}>
                <ArrowIcon />
            </ArrowContent>     
        </Container>
    );
}