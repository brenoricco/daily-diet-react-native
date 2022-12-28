import { MealDTO } from "@utils/dtos/MealDTO";
import { TouchableOpacityProps } from "react-native";
import { Container, Content, Divider, Hour, Name, Status } from "./styles";

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