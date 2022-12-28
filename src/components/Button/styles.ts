import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ColorModeProps = 'DARK' | 'LIGHT';

type Props = {
    colorMode: ColorModeProps;
}

export const ButtonContent = styled.TouchableOpacity<Props>`    
    ${({ theme, colorMode }) => css`
        background-color: ${colorMode && colorMode === 'DARK' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
        border: 1px solid ${theme.COLORS.GRAY_200}
    `}

    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
`;

type ButtonTextProps = {
    colorMode: ColorModeProps;
}

export const ButtonText = styled.Text<ButtonTextProps>`
    ${({ theme, colorMode }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${colorMode && colorMode === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.LG};
    `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, colorMode}) => ({
    size: 20,
    color: colorMode && colorMode === 'DARK' ? theme.COLORS.WHITE : theme.COLORS.GRAY_200
}))`
    margin-right: 5px;
`;