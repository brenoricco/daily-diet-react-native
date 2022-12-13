import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { ButtonOption, Container, Content, Input, InputContent, Label, Status, TextOption } from "./styles";

import feedbackPositiveImg from '@assets/PositiveFeedback.png';
import feedbackNegativeImg from '@assets/NegativeFeedback.png';
import { Form } from "@components/Form";


export function New() {
    const [ optionYesPress, setOptionYesPress ] = useState<boolean>(false);
    const [ optionNoPress, setOptionNoPress ] = useState<boolean>(false);

    const theme = useTheme();
    const navigation = useNavigation();

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
                <Button 
                    icon="add" 
                    name="Cadastrar refeição"
                    onPress={addNewMeal}
                />
            </Form>
        </Container>
    );
}