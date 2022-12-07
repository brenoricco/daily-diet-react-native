import { Meal } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";
import { ButtonNew, ButtonNewText, Container, ContentNew, Date, PlusIcon, Title } from "./styles";

export function Meals() {

    const DATA = [
        {
            id: 1,
            date: "10.08.22",
            data: [
                {
                    name: 'X-Tudo',
                    hour: '20:00',
                    status: false
                },
                {
                    name: 'X-Tudo2',
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

    return (
        <Container>
            <ContentNew>
                <Title>Refeições</Title>
                <ButtonNew onPress={handleGoToNew}>
                    <PlusIcon />
                    <ButtonNewText>Nova refeição</ButtonNewText>
                </ButtonNew>
            </ContentNew>

            <SectionList
                sections={[...DATA]}
                renderItem={({item})=>(
                    <Meal key={item.name+item.hour} data={item} />
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