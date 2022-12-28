import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MModal } from "@components/MModal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteMeal } from "@storage/meal/deleteMeal";
import { MealDTO } from "@utils/dtos/MealDTO";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ButtonsContainer, Container, Content, DateTimeLabel, DateTimeValue, Description, Form, ModalButtonsContainer, ModalContainer, ModalContent, ModalTitle, Name, Status, StatusContent, StatusText } from "./styles";

type RouteParams = {
    meal: MealDTO;
}

export function Details() {
    const [modalVisible, setModalVisible] = useState(false);

    const theme = useTheme();
    const route = useRoute();
    const { meal } = route.params as RouteParams;

    const navigation = useNavigation();

    async function handleDeleteMeal() {
        await deleteMeal(meal);
        return navigation.goBack();
    }

    async function handleDeleteCancel() {
        setModalVisible(false);
    }

    return (
        <Container status={meal.status}>
            <Header 
                title="Refeição" 
                color={theme.COLORS.GRAY_200}
                backgroundColor={meal.status ? theme.COLORS.GREEN : theme.COLORS.RED}
            />

            <MModal 
                title="Deseja realmente excluir o registro da refeição?"
                visible={modalVisible}
                btnAcceptName="Sim, excluir"
                handleAccept={handleDeleteMeal}
                handleCancel={handleDeleteCancel}
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
                        onPress={() => navigation.navigate('edit', { meal })}
                    />
                    <Button 
                        style={{ marginTop: 8 }}
                        icon="delete" 
                        name="Excluir refeição"
                        colorMode="LIGHT"
                        onPress={() => setModalVisible(true)}
                    />
                </ButtonsContainer>
            </Form>
        </Container>
    );
}