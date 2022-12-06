import { PercentNumber, PercentText } from "@components/PercentCard/styles";
import { ArrowContent, ArrowReturnIcon, Container, Label, StatisticsContent, StatisticsContainer, StatisticsHeader, CardNumber, CardText, BigCard, SmallCardsContainer, SmallCard } from "./styles";
import { useTheme } from "styled-components/native";

export function Statistics() {

    const { COLORS } = useTheme();

    return (
        <Container>
            <StatisticsHeader>
                <ArrowContent>
                    <ArrowReturnIcon />
                </ArrowContent>
                
                <StatisticsContent>
                    <PercentNumber>90,86%</PercentNumber>
                    <PercentText>das refeições dentro da dieta</PercentText>
                </StatisticsContent>
            </StatisticsHeader>

            <StatisticsContainer>
                <Label>Estatísticas gerais</Label>

                <BigCard>
                    <CardNumber>22</CardNumber>
                    <CardText>melhor sequência de pratos dentro da dieta</CardText>
                </BigCard>

                <BigCard>
                    <CardNumber>109</CardNumber>
                    <CardText>refeições registradas</CardText>
                </BigCard>

                <SmallCardsContainer>
                    <SmallCard style={{ backgroundColor: COLORS.GREEN }}>
                        <CardNumber>99</CardNumber>
                        <CardText>refeições dentro da dieta</CardText>
                    </SmallCard>

                    <SmallCard style={{ marginLeft: 8, backgroundColor: COLORS.RED }}>
                        <CardNumber>10</CardNumber>
                        <CardText>refeições fora da dieta</CardText>
                    </SmallCard>
                </SmallCardsContainer>

            </StatisticsContainer>
            
        </Container>
    );
}