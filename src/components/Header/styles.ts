import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL};
        color: ${theme.COLORS.GRAY_100};
    `}
    padding-right: 10px
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    name: "arrow-back",
    size: 24
}))`
    justify-content: flex-end;
`;