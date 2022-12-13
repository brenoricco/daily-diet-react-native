import { Button } from '@components/Button';
import { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Content, Label, Input, InputContent, ButtonOption, Status, TextOption } from './styles';

type Props = {
    children: JSX.Element;
}

export function Form({ children }: Props) {

    const [ optionYesPress, setOptionYesPress ] = useState<boolean>(false);
    const [ optionNoPress, setOptionNoPress ] = useState<boolean>(false);

    const theme = useTheme();

    function handleYesPress() {
        if(optionNoPress) {
            setOptionNoPress(false);
        }
        setOptionYesPress(!optionYesPress);
    }

    function handleNoPress() {
        if(optionYesPress) {
            setOptionYesPress(false);
        }
        setOptionNoPress(!optionNoPress);
        
    }

    return (
        <Container>
                <View>
                    <Label>Nome</Label>
                    <Input style={{ height: 42 }} />

                    <Label>Descrição</Label>
                    <Input 
                        style={{ height: 142, textAlignVertical: 'top', paddingTop: 12, paddingBottom: 12 }}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Content>
                        <InputContent>
                            <Label>Data</Label>
                            <Input 
                                style={{ height: 42 }}
                            />
                        </InputContent>
                        
                        <InputContent style={{ marginLeft: 12 }}>
                            <Label>Hora</Label>
                            <Input 
                                style={{ height: 42 }}
                            />
                        </InputContent>
                    </Content>

                    <Label>Está dentro da dieta?</Label>
                    <Content style={{ marginTop: 12 }}>
                        <ButtonOption
                            isActive={optionYesPress}
                            bgColorOnActive={theme.COLORS.GREEN}
                            borderColorOnActive={theme.COLORS.GREEN_DARK}
                            onPress={() => handleYesPress()}
                        >
                            <Status style={{ backgroundColor: theme.COLORS.GREEN_DARK }} />
                            <TextOption>Sim</TextOption>
                        </ButtonOption>

                        <ButtonOption 
                            isActive={optionNoPress}
                            bgColorOnActive={theme.COLORS.RED}
                            borderColorOnActive={theme.COLORS.RED_DARK}
                            onPress={() => handleNoPress()}
                            style={{ marginLeft: 12 }}
                        >
                            <Status style={{ backgroundColor: theme.COLORS.RED_DARK }} />
                            <TextOption>Não</TextOption>
                        </ButtonOption>
                    </Content>
                </View>

                <View>
                    { children }
                </View>
            </Container>
    );
}