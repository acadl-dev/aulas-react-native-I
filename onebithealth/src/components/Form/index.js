import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState('Preencha o peso e a altura')
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState('Calcular')

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual: ");
            setTextButton("Calcular Novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    }


    return(
        <View style={styles.formContext}>
            <View>
                <Text>Altura</Text>

                <TextInput 
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text>Peso</Text>

                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.365'
                    keyboardType='numeric'/>

                <Button 
                    onPress={() => validationImc()}
                    title={textButton}
                />

                </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            
        </View>
    );
}