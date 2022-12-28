import { Button } from "@components/Button";
import { useEffect, useState } from "react";
import { Modal } from "react-native";
import { ModalButtonsContainer, ModalContainer, ModalContent, ModalTitle } from "./styles";

type Props = {
    title: string;
    visible: boolean;

    btnCancelName?: string;
    handleCancel?: () => void; 

    btnAcceptName?: string;
    handleAccept?: () => void;    
}

export function MModal({ title, visible, btnCancelName, handleCancel, btnAcceptName, handleAccept }: Props) {
    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    function onCancel() {
        setModalVisible(false)

        if(handleCancel) {
            handleCancel();
        }
    }

    function onAccept() {
        if(handleAccept) {
            handleAccept();
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
                >
            <ModalContainer>
                <ModalContent>
                    <ModalTitle>{ title }</ModalTitle>
                            
                    <ModalButtonsContainer>
                        <Button 
                            style={{ flex: btnAcceptName ? 0 : 1, marginRight: 14, marginTop: 8 }}
                            name={btnCancelName ? btnCancelName : 'Cancelar'}
                            colorMode={btnAcceptName ? "LIGHT" : "DARK"}
                            onPress={onCancel}
                        />
                        { btnAcceptName && 
                            <Button 
                                style={{marginTop: 8}}
                                name={btnAcceptName ? btnAcceptName : 'Aceitar'}
                                onPress={onAccept}
                            /> 
                        }
                                
                    </ModalButtonsContainer>                            
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
}