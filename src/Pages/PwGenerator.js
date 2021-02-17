import React,{Component,useState} from 'react'

 const  PwGenerator = () => {

    const [password, setPassword] = useState('0');
    const [passwordLength,setPasswordLength] = useState(false)
    const [containsNumber,setContainsNumber] = useState(false)
    const [isUpperCase,SetIsUpperCase] = useState(false)
    const [containsSymbol,SetContainsSymbol] = useState(false)


   
    return (
        <div>
            <>
            hello
            </>
        </div>
    )
}

export default PwGenerator