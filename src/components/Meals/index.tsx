import { Button } from "@components/Button";
import { Meal, MealDTO } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";
import { Container, ContentNew, Date, Title } from "./styles";

export function Meals() {

    const DATA = [
        {
            id: 1,
            date: "10.08.22",
            data: [
                {
                    name: 'X-Tudo',
                    description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
                    hour: '20:00',
                    status: false
                },
                {
                    name: 'X-Tudo2',
                    description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
                    hour: '20:00',
                    status: false
                }
            ]
        },
        {
            id: 2,
            date: "11.08.22",
            data: [
                {
                    name: 'Banana',
                    hour: '07:00',
                    status: true
                },
                {
                    name: 'Pão',
                    hour: '08:00',
                    status: true
                },
                {
                    name: 'Lazanha',
                    hour: '12:00',
                    status: false
                },
                {
                    name: 'Café',
                    hour: '12:30',
                    status: true
                }
            ]
        },
        {
            id: 3,
            date: "12.08.22",
            data: [
                {
                    name: 'Pizza',
                    hour: '16:00',
                    status: false
                }
            ]
        },
    ];

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
                sections={[...DATA]}
                renderItem={({item})=>(
                    <Meal 
                        key={item.name+item.hour} 
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