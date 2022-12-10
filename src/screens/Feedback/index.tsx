import { Container, Image, Message, Title } from "./style";

import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";

type RouteParams = {
    title: string;
    titleColor: string;
    message: string;
    imagePath: ImageSourcePropType;
}

export function Feedback() {

    const navigation = useNavigation();

    const route = useRoute();
    const { title, titleColor, message, imagePath } = route.params as RouteParams;

    return (
        <Container>
            <Title titleColor={titleColor}>{title}</Title>
            <Message>{message}</Message>
            <Image source={imagePath} />
            <Button  
                name="Ir para pagina inicial"
                onPress={() => navigation.navigate('home')}
            />
        </Container>
    );
}