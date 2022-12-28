import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type StatusProps = {
    status: boolean | undefined;
}


export const Container = styled(SafeAreaView)<StatusProps>`
    flex: 1;
    background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN : theme.COLORS.RED};
`;

export const Form = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 20px;
    padding: 24px 24px;
    justify-content: space-between;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL};
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-top: 20px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-top: 8px;
`;

export const DateTimeLabel = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-top: 20px;
`;

export const DateTimeValue = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-top: 8px;
`;

export const StatusContent = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_600};
    `}
    padding: 8px 16px;
    border-radius: 1000px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 8px
`;

export const StatusText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-left: 8px;
`;

export const Status = styled.View<StatusProps>`
    border-radius: 50px;
    padding: 6px;
    background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Content = styled.View`
    align-items: flex-start;
`;

export const ButtonsContainer = styled.View``;

export const ModalContainer = styled.View`
    background-color: rgba(128, 128, 128, 0.5);
    flex: 1;
    padding: 24px 24px;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.View`
    background-color: ${({ theme}) => theme.COLORS.WHITE};
    padding: 25px;
    border-radius: 6px;
`;

export const ModalTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL};
        color: ${theme.COLORS.GRAY_200};
    `}
    padding: 12px 24px;
    text-align: center;
`;

export const ModalButtonsContainer = styled.View`
    flex-direction: row;
    padding-top: 24px;
`;