import { Button, Container, Icon, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

type Props = {
    title: string;
    backgroundColor: string;
    color: string;
}

export function Header({ title, backgroundColor, color }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container style={{ backgroundColor: backgroundColor }}>
            <Button onPress={handleGoBack}>
                <Icon color={color} />
            </Button>            
            <Title>{ title }</Title>
            <Text></Text>
        </Container>
    );
}