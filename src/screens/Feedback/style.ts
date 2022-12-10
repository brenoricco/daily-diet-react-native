import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
`;

type TitleProps = {
    titleColor: string;
}

export const Title = styled.Text<TitleProps>`
    ${({ theme, titleColor }) => css`
        color: ${titleColor};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL};
    `}
`;

export const Message = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG};
    `}
    margin-top: 14px;
`;

export const Image = styled.Image`
    padding: 0 75px 0 75px;
    margin-top: 32px;
    margin-bottom: 32px;
`;