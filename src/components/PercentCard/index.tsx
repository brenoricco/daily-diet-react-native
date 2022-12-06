import { ArrowContent, ArrowIcon, Container, Content, PercentNumber, PercentText } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";


export function PercentCard() {
    return (
        <Container>           
            <Content>
                <PercentNumber>90,86%</PercentNumber>
                <PercentText>das refeições dentro da dieta</PercentText>
            </Content>       
            <ArrowContent>
                <ArrowIcon />
            </ArrowContent>     
        </Container>
    );
}