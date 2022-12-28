import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";
import { MealDTO } from "@utils/dtos/MealDTO";
import { MealsListDTO } from "@utils/dtos/MealslListDTO";
import { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, ContentNew, Date, Title } from "./styles";

type Props = {
    mealsList: MealsListDTO[];
}

export function Meals({ mealsList }: Props) {
   const [data, setData] = useState<MealsListDTO[]>(mealsList);

    useEffect(() => {
        setData(mealsList);
    }, [mealsList])

    const navigation = useNavigation();

    function handleGoToNew() {
        navigation.navigate('new');
    }

    function handleGoToDetails(item: MealDTO) {
        navigation.navigate('details', { meal: item });
    }

    return (
        <Container>
            <ContentNew>
                <Title>Refeições</Title>
                <Button 
                    icon="add"
                    name="Nova refeição"
                    onPress={handleGoToNew}
                />
            </ContentNew>

            <SectionList
                sections={[...data]}
                renderItem={({item})=>(
                    <Meal 
                        key={item.id} 
                        data={item} 
                        onPress={() => handleGoToDetails(item)}
                    />
                )}
                renderSectionHeader={({section})=>(
                    <Date>{section.date}</Date>
                )}
                keyExtractor={item => item.name + item.hour}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}