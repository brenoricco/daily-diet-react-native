import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const ButtonContent = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.LG};
    `}
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 20,
    color: theme.COLORS.WHITE
}))`
    margin-right: 5px;
`;