import { TouchableOpacityProps } from "react-native";
import { ButtonContent, ButtonText, ColorModeProps, Icon } from "./styles";

type Props = TouchableOpacityProps & {
    icon?: string;
    name: string;
    colorMode?: ColorModeProps;
}

export function Button({ icon, name, colorMode = 'DARK', ...rest }: Props) {
    return (
        <ButtonContent colorMode={colorMode} {...rest}>
            <Icon colorMode={colorMode} name={icon}  />
            <ButtonText colorMode={colorMode} >{ name }</ButtonText>
        </ButtonContent>
    );
}