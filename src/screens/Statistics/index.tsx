import { PercentNumber, PercentText } from "@components/PercentCard/styles";
import { ArrowContent, ArrowReturnIcon, Container, Label, StatisticsContent, StatisticsContainer, StatisticsHeader, CardNumber, CardText, BigCard, SmallCardsContainer, SmallCard } from "./styles";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { MealsListDTO } from "@utils/dtos/MealslListDTO";
import { useCallback, useState } from "react";
import { calculateBestSequence, calculatePercentageInDiet, countInDietMeals, countOffDietMeals, countTotalOfMeals } from "@utils/functions/statisticsCalculate";
import { getAllMeals } from "@storage/meal/getAllMeals";

export function Statistics() {
    const [percentInDiet, setPercentInDiet] = useState<number>();
    const [bestSequenceInDiet, setBestSequenceInDiet] = useState<number>();
    const [totalOfMeals, setTotalOfMeals] = useState<number>();
    const [totalInDietMeals, setTotalInDietMeals] = useState<number>();
    const [totalOffDietMeals, setTotalOffDietMeals] = useState<number>();

    const { COLORS } = useTheme();

    useFocusEffect(useCallback(() => {
        async function onInit() {
            const mealsList = await getAllMeals();
            
            const percentageInDiet = calculatePercentageInDiet(mealsList);
            setPercentInDiet(percentageInDiet);

            const bestSequence = calculateBestSequence(mealsList);
            setBestSequenceInDiet(bestSequence);

            const countTotal = countTotalOfMeals(mealsList);
            setTotalOfMeals(countTotal);

            const countTotalInDiet = countInDietMeals(mealsList);
            setTotalInDietMeals(countTotalInDiet);

            const countTotalOffDiet = countOffDietMeals(mealsList);
            setTotalOffDietMeals(countTotalOffDiet);
        }
        onInit();        
    }, []));

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }



    return (
        <Container>
            <StatisticsHeader>
                <ArrowContent onPress={handleGoBack}>
                    <ArrowReturnIcon />
                </ArrowContent>
                
                <StatisticsContent>
                    <PercentNumber>{percentInDiet?.toFixed(2)}%</PercentNumber>
                    <PercentText>das refeições dentro da dieta</PercentText>
                </StatisticsContent>
            </StatisticsHeader>

            <StatisticsContainer>
                <Label>Estatísticas gerais</Label>

                <BigCard>
                    <CardNumber>{bestSequenceInDiet}</CardNumber>
                    <CardText>melhor sequência de pratos dentro da dieta</CardText>
                </BigCard>

                <BigCard>
                    <CardNumber>{totalOfMeals}</CardNumber>
                    <CardText>refeições registradas</CardText>
                </BigCard>

                <SmallCardsContainer>
                    <SmallCard style={{ backgroundColor: COLORS.GREEN }}>
                        <CardNumber>{totalInDietMeals}</CardNumber>
                        <CardText>refeições dentro da dieta</CardText>
                    </SmallCard>

                    <SmallCard style={{ marginLeft: 8, backgroundColor: COLORS.RED }}>
                        <CardNumber>{totalOffDietMeals}</CardNumber>
                        <CardText>refeições fora da dieta</CardText>
                    </SmallCard>
                </SmallCardsContainer>

            </StatisticsContainer>
            
        </Container>
    );
}