import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN};
        
    margin-bottom: 24px;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Content = styled.View`
    flex: 1;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 0;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
`;

export const PercentNumber = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXXL};
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}    
`;

export const PercentText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `} 
`;

export const ArrowContent = styled.TouchableOpacity`
    height: 100%;
    padding: 4px
`;

export const ArrowIcon = styled(MaterialIcons).attrs(({theme}) => ({
    name: "arrow-upward",
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))`
    transform: rotate(45deg);
    justify-content: flex-end;
`;