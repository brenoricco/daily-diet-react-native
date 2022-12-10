import { TouchableOpacityProps } from "react-native";
import { Container, Content, Divider, Hour, Name, Status } from "./styles";

export type MealDTO = {
    hour: string;
    name: string;
    description?: string;
    status: boolean;
}

type Props = TouchableOpacityProps & {
    data: MealDTO;
}

export function Meal({ data, ...rest } : Props) {
    return (
        <Container {...rest}>
            <Content>
                <Hour>{data.hour}</Hour>
                <Divider>|</Divider>
                <Name>{data.name}</Name>
            </Content>
            <Status status={data.status} />
        </Container>
    );
}