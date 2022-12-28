import styled, { css } from "styled-components/native";

type Props = {
    status: boolean | undefined;
}

export const Container = styled.TouchableOpacity`
    height: 49px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin-bottom: 5px;
`;

export const  Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100}
    `}
    min-width: 30px;
`;

export const Divider = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_400}
    `}
    margin-left: 5px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200}
    `}
    margin-left: 5px;
`;

export const Status = styled.View<Props>`
    background-color: ${({ theme, status }) => status === true ? theme.COLORS.GREEN_MD : theme.COLORS.RED};
    width: 14px;
    height: 14px;
    border-radius: 100px;
`;