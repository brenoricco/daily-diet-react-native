import { useNavigation } from "@react-navigation/native";
import { ArrowContent, ArrowIcon, Container, Content, PercentNumber, PercentText } from "./styles";

export function PercentCard() {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('statistics');
    }

    return (
        <Container>           
            <Content>
                <PercentNumber>90,86%</PercentNumber>
                <PercentText>das refeições dentro da dieta</PercentText>
            </Content>       
            <ArrowContent onPress={handleNavigate}>
                <ArrowIcon />
            </ArrowContent>     
        </Container>
    );
}