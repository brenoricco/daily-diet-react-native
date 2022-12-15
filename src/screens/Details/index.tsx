import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealDTO } from "@components/Meal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Modal, View } from "react-native";
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

    return (
        <Container status={meal.status}>
            <Header 
                title="Refeição" 
                color={theme.COLORS.GRAY_200}
                backgroundColor={meal.status ? theme.COLORS.GREEN : theme.COLORS.RED}
            />

            
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    }}
                >
                    <ModalContainer>
                        <ModalContent>
                            <ModalTitle>Deseja realmente excluir o registro da refeição?</ModalTitle>
                            
                            <ModalButtonsContainer>
                                <Button 
                                    style={{ marginRight: 14, marginTop: 8 }}
                                    name="Cancelar"
                                    colorMode="LIGHT"
                                    onPress={() => setModalVisible(false)}
                                />
                                <Button 
                                    style={{marginTop: 8}}
                                    name="Sim, excluir"
                                    onPress={() => {}}
                                />
                            </ModalButtonsContainer>                            
                        </ModalContent>
                    </ModalContainer>
                </Modal>
            

            

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