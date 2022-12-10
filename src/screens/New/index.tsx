import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { ButtonOption, Container, Content, Form, Input, InputContent, Label, Status, TextOption } from "./styles";

import feedbackPositiveImg from '@assets/PositiveFeedback.png';
import feedbackNegativeImg from '@assets/NegativeFeedback.png';


export function New() {
    const [ optionYesPress, setOptionYesPress ] = useState<boolean>(false);
    const [ optionNoPress, setOptionNoPress ] = useState<boolean>(false);

    const theme = useTheme();
    const navigation = useNavigation();

    function handleYesPress() {
        if(optionNoPress) {
            setOptionNoPress(false);
        }
        setOptionYesPress(!optionYesPress);
    }

    function handleNoPress() {
        if(optionYesPress) {
            setOptionYesPress(false);
        }
        setOptionNoPress(!optionNoPress);
        
    }

    function navigateToFeedback() {
        if(optionYesPress) {
            const positiveFeedback = {
                title: 'Continue assim!',
                titleColor: theme.COLORS.GREEN_DARK,
                message: 'Você continua dentro da dieta. Muito bem!',
                imagePath: feedbackPositiveImg
            }
            return navigation.navigate('feedback', positiveFeedback);
        } 
        const negativeFeedback = {
            title: 'Que pena!',
            titleColor: theme.COLORS.RED_DARK,
            message: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
            imagePath: feedbackNegativeImg
        }
        return navigation.navigate('feedback', negativeFeedback);
    }

    function addNewMeal() {

        
        navigateToFeedback();
    }

    return (
        <Container>
            <Header 
                title="Nova refeição" 
                color={theme.COLORS.GRAY_200}
                backgroundColor={theme.COLORS.GRAY_500}
            />
            <Form>
                <View>
                    <Label>Nome</Label>
                    <Input style={{ height: 42 }} />

                    <Label>Descrição</Label>
                    <Input 
                        style={{ height: 142, textAlignVertical: 'top', paddingTop: 12, paddingBottom: 12 }}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Content>
                        <InputContent>
                            <Label>Data</Label>
                            <Input 
                                style={{ height: 42 }}
                            />
                        </InputContent>
                        
                        <InputContent style={{ marginLeft: 12 }}>
                            <Label>Hora</Label>
                            <Input 
                                style={{ height: 42 }}
                            />
                        </InputContent>
                    </Content>

                    <Label>Está dentro da dieta?</Label>
                    <Content style={{ marginTop: 12 }}>
                        <ButtonOption
                            isActive={optionYesPress}
                            bgColorOnActive={theme.COLORS.GREEN}
                            borderColorOnActive={theme.COLORS.GREEN_DARK}
                            onPress={() => handleYesPress()}
                        >
                            <Status style={{ backgroundColor: theme.COLORS.GREEN_DARK }} />
                            <TextOption>Sim</TextOption>
                        </ButtonOption>

                        <ButtonOption 
                            isActive={optionNoPress}
                            bgColorOnActive={theme.COLORS.RED}
                            borderColorOnActive={theme.COLORS.RED_DARK}
                            onPress={() => handleNoPress()}
                            style={{ marginLeft: 12 }}
                        >
                            <Status style={{ backgroundColor: theme.COLORS.RED_DARK }} />
                            <TextOption>Não</TextOption>
                        </ButtonOption>
                    </Content>
                </View>
                
                <Button 
                    icon="add" 
                    name="Cadastrar refeição"
                    onPress={addNewMeal}
                />
            </Form>
        </Container>
    );
}