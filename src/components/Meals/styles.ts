import styled, { css } from "styled-components/native";

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

export const Date = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL};
    `}
    margin-bottom: 8px
`;