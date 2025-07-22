import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState('Preencha o peso e a altura')
    const [imc, setImc]= useState(null)
    const [textButton, setTextB]= useState('Calcular')

    return(
        <View>
            <View>
                <Text>Altura</Text>

                <TextInput 
                placeholder='Ex. 75.365'
                keyboardType='numeric'
                />

                <Text>Peso</Text>

                <TextInput
                 placeholder='Ex. 1.75'
                keyboardType='numeric'/>

                <Button title='Calcular IMC'/>

                </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            
        </View>
    );
}