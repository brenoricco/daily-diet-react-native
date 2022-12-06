import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const StatisticsHeader = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    flex-direction: row;
`;

export const StatisticsContent = styled.View`
    flex:1;
    padding-top: 42px;
    padding-right: 32px;
    padding-bottom: 42px;
    justify-content: center;
    align-items: center;
`;

export const ArrowContent = styled.TouchableOpacity`
    height: 100%;
    padding: 8px;
`;

export const ArrowReturnIcon = styled(MaterialIcons).attrs(({theme}) => ({
    name: "arrow-back",
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
    justify-content: flex-end;
`;

export const StatisticsContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    flex: 1;
    padding: 24px;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `} 
    margin-bottom: 24px;
`;

export const BigCard = styled.View`
    width: 100%;
    padding: 24px 12px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const CardNumber = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL};
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `} 
`;

export const CardText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `} 
    text-align: center;
`;

export const SmallCardsContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const SmallCard = styled.View`
    flex: 1;
    padding: 24px 12px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;