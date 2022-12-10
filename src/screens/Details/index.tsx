import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealDTO } from "@components/Meal";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { ButtonsContainer, Container, Content, DateTimeLabel, DateTimeValue, Description, Form, Name, Status, StatusContent, StatusText } from "./styles";

type RouteParams = {
    meal: MealDTO;
}

export function Details() {

    const theme = useTheme();
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    return (
        <Container status={meal.status}>
            <Header 
                title="Refeição" 
                color={theme.COLORS.GRAY_200}
                backgroundColor={meal.status ? theme.COLORS.GREEN : theme.COLORS.RED}
            />
            <Form>
                <Content>
                    <Name>{ meal.name }</Name> 
                    <Description>{ meal.description }</Description>

                    <DateTimeLabel>Data e hora</DateTimeLabel>
                    <DateTimeValue>{ meal.hour }</DateTimeValue>

                    <StatusContent>
                        <Status status={meal.status} />
                        <StatusText>
                            {   meal.status ? 'dentro da dieta' : 'fora da dieta' }
                        </StatusText>
                    </StatusContent>
                </Content>
               
               
                <ButtonsContainer>
                    <Button 
                        icon="edit" 
                        name="Editar refeição"
                        onPress={() => {}}
                    />
                    <Button 
                        style={{ marginTop: 8 }}
                        icon="delete" 
                        name="Excluir refeição"
                        colorMode="LIGHT"
                        onPress={() => {}}
                    />
                </ButtonsContainer>
            </Form>
        </Container>
    );
}