import styled, { css } from "styled-components/native";

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