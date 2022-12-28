import {  Container, Content, Logo, Profile } from './styles';

import logoImg from '@assets/Logo.png';
import profileImg from '@assets/Profile.png';
import { PercentCard } from '@components/PercentCard';
import { Meals } from '@components/Meals';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getAllMeals } from '@storage/meal/getAllMeals';
import { MealsListDTO } from '@utils/dtos/MealslListDTO';

export function Home() {

    const [meals, setMeals] = useState<MealsListDTO[]>([])

    useFocusEffect(useCallback(() => {
        async function onInit() {
            const data = await getAllMeals()
            await setMeals(data);
        }
        onInit();
    }, []));

    return (
        <Container>
            <Content>
                <Logo source={logoImg} />
                <Profile source={profileImg} />
            </Content>
            <PercentCard mealsList={meals} />
            <Meals mealsList={meals} />
        </Container>
    );

}