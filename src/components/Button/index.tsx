import { TouchableOpacityProps } from "react-native";
import { ButtonContent, ButtonText, Icon } from "./styles";

type Props = TouchableOpacityProps & {
    icon: string;
    name: string;
}

export function Button({ icon, name, ...rest }: Props) {
    return (
        <ButtonContent {...rest}>
            <Icon name={icon}  />
            <ButtonText>{ name }</ButtonText>
        </ButtonContent>
    );
}