import { Container, Content, Divider, Hour, Name, Status } from "./styles";

export type MealDTO = {
    hour: string;
    name: string;
    status: boolean;
}

type Props = {
    data: MealDTO;
}

export function Meal({ data } : Props) {
    return (
        <Container>
            <Content>
                <Hour>{data.hour}</Hour>
                <Divider>|</Divider>
                <Name>{data.name}</Name>
            </Content>
            <Status status={data.status} />
        </Container>
    );
}