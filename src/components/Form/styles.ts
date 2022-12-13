import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 20px;
    padding: 24px 24px;
    justify-content: space-between;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    padding: 0 12px;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const InputContent = styled.View`
    flex: 1;
    flex-direction: column;
`;

export type ButtonOptionStyleProps = {
    isActive: boolean;
    bgColorOnActive: string;
    borderColorOnActive: string;
}

export const ButtonOption = styled(TouchableOpacity)<ButtonOptionStyleProps>`
    flex: 1;

    ${({ theme, isActive, bgColorOnActive, borderColorOnActive }) => css`
        background-color: ${isActive ? bgColorOnActive : theme.COLORS.GRAY_600};
        border: 1px solid ${isActive ? borderColorOnActive : theme.COLORS.GRAY_600};
    `}

    padding: 16px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextOption = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-left: 8px;
`;

export const Status = styled.View`
    border-radius: 100px;
    padding: 6px;
`;