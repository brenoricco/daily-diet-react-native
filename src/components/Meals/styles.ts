import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.LG};
    `}
    margin-bottom: 5px;
`;

export const ContentNew = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const ButtonNew = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
`;

export const ButtonNewText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.LG};
    `}
`;

export const PlusIcon = styled(MaterialIcons).attrs(({theme}) => ({
    name: "add",
    size: 20,
    color: theme.COLORS.WHITE
}))`
    margin-right: 5px;
`;

export const Date = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL};
    `}
    margin-bottom: 8px
`;