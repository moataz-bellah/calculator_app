import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView ,Button,Row} from 'react-native';

export default function App() {
  const [ currVal, setCurrVal ] = useState("0");
  const [ operator, setOperator ] = useState(null);
  const [ prevVal, setPrevVal ] = useState(null);

  const handleTap = (type, value) => {
    if(type === "number") {
        setCurrVal(`${currVal}${value}`);
    }

    if(type === "operator") {
        setOperator(value);
        setPrevVal(currVal);
        setCurrVal("0");
    }

    if(type === "clear") {
        setCurrVal("0");
        setOperator(null);
        setPrevVal(null);
    }

    if(type === "posneg") {
        setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if(type === "percentage") {
        setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if(type === "equal") {
        const current = parseFloat(currVal);
        const previous = parseFloat(prevVal);

        if(operator === "+") {
            setCurrVal(previous + current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "/") {
            setCurrVal(previous / current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "-") {
            setCurrVal(previous - current);
            setOperator(null);
            setPrevVal(null);
        }

        if(operator === "*") {
            setCurrVal(previous * current);
            setOperator(null);
            setPrevVal(null);
        }
    }

  }

  return (

      <Text style={styles.value}>{currVal}</Text>
      <Row>
          <Button title="C" theme="secondary" onPress={() => {
            handleTap("clear")
          }} />
          <Button title="+/-" theme="secondary" onPress={() => {handleTap("posneg")}} />
          <Button title="%" theme="secondary" onPress={() => {handleTap("percentage")}} />
          <Button title="/" theme="accent" onPress={() => {handleTap("operator","/")}} />
      </Row>
      <Row>
          <Button title="7" onPress={() => {handleTap("number",7)}} />
          <Button title="8" onPress={() => {handleTap("number",8)}} />
          <Button title="9" onPress={() => {handleTap("number",9)}} />
          <Button title="x" theme="accent" onPress={() => {handleTap("operator","*")}} />
      </Row>
      <Row>
          <Button title="4" onPress={() => {handleTap("number",4)}} />
          <Button title="5" onPress={() => {handleTap("number",5)}} />
          <Button title="6" onPress={() => {handleTap("number",6)}} />
          <Button title="-" theme="accent" onPress={() => this.handleTap("operator","-")} />
      </Row>
      <Row>
          <Button title="1" onPress={() => {handleTap("number",1)}} />
          <Button title="2" onPress={() => {handleTap("number",2)}} />
          <Button title="3" onPress={() => {handleTap("number",3)}} />
          <Button title="+" theme="accent" onPress={() => {handleTap("operator","+")}} />
      </Row>
      <Row>
          <Button title="0" size="double" onPress={() => {handleTap("number",0)}} />
          <Button title="." onPress={() => {handleTap("number",".")}} />
          <Button title="=" theme="accent" onPress={() => {handleTap("equal")}} />
      </Row>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: "flex-end",
  },
  value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
  }
});
