import { Button, ButtonProps } from '@components/Button';
import { MModal } from '@components/MModal';
import { useFocusEffect } from '@react-navigation/native';
import { MealDTO } from '@utils/dtos/MealDTO';
import { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Content, Label, Input, InputContent, ButtonOption, Status, TextOption } from './styles';

type Props = {
    button: ButtonProps;
    data: MealDTO;
    onPress: (item: MealDTO) => void;
}

export function Form({ data, button, onPress }: Props) {
    const [modalVisible, setModalVisible] = useState(false);

    const [nameValue, setNameValue] = useState<string>(data.name);
    const [descriptionValue, setDescriptionValue] = useState<string>(data.description);
    const [hourValue, setHourValue] = useState<string>(data.hour);
    const [dateValue, setDateValue] = useState<string>(data.date);

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

    function onModalOnClose() {
        setModalVisible(false);
    }

    function isFormValid() : boolean {
        if(nameValue && descriptionValue &&
           hourValue && dateValue && (optionYesPress || optionNoPress)) {
            return true;
        }

        return false;
    }

    function handleOnPress() {

        if(!isFormValid()) {
            setModalVisible(true);
            return;
        }

        const newMeal = {
            name: nameValue,
            description: descriptionValue,
            hour: hourValue,
            date: dateValue,
            status: optionYesPress
        }

        onPress(newMeal);
    }

    useFocusEffect(useCallback(() => {
        if(data.status === true) {
            setOptionYesPress(true);
        } else if(data.status === false) {
            setOptionNoPress(true);
        }
    }, []));

    return (
        <Container>
                <MModal 
                    title="Porfavor preencher todos os campos antes de continuar."
                    visible={modalVisible}
                    btnCancelName="OK"
                    handleCancel={onModalOnClose}
                />

                <View>
                    <Label>Nome</Label>
                    <Input 
                        value={nameValue} 
                        style={{ height: 42 }} 
                        onChangeText={setNameValue}
                    />

                    <Label>Descrição</Label>
                    <Input 
                        style={{ height: 142, textAlignVertical: 'top', paddingTop: 12, paddingBottom: 12 }}
                        value={descriptionValue}
                        onChangeText={setDescriptionValue}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Content>
                        <InputContent>
                            <Label>Data</Label>
                            <Input 
                                value={dateValue}
                                onChangeText={setDateValue}
                                style={{ height: 42 }}
                            />
                        </InputContent>
                        
                        <InputContent style={{ marginLeft: 12 }}>
                            <Label>Hora</Label>
                            <Input 
                                value={hourValue}
                                onChangeText={setHourValue}
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
                    <Button
                        name={button.name}
                        icon={button.icon}
                        colorMode={button.colorMode}
                        onPress={handleOnPress}
                    />
                </View>
            </Container>
    );
}