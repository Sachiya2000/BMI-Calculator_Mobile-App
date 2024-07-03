import React, {useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import TextField from './TextFeild';

const Form = () => {
  const [weight, setWeight] = useState ('');
  const [height, setHeight] = useState ('');
  const [bmi, setBmi] = useState (0);
  const [message, setMessage] = useState ('');

  function calculateBMI () {
    const bmiValue = weight / (height * height);
    setBmi (bmiValue.toFixed (2));
    setMessage (getBMIMessage (bmiValue));
  }

  function getBMIMessage (bmiValue) {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return 'Normal';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  function resetForm () {
    setWeight ('');
    setHeight ('');
    setBmi (0);
    setMessage ('');
  }

  return (
    <ImageBackground
      source={require ('../assets/background.jpg')}
      style={styles.containerForm}
    >
      <StatusBar style="auto" />
      <View style={styles.cardStyle}>
        <TextField />
        <View style={styles.form}>
          <Text style={styles.title}>BMI Calculator</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />

          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Height (m)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />

          </View>
          <View style={styles.buttonContainer}>
            <Button title="Check" onPress={calculateBMI} />
            <Button title="Reset" onPress={resetForm} />
          </View>
        </View>
        {bmi > 0 &&
          <View style={styles.result}>
            <Text style={styles.resultText}>BMI: {bmi}</Text>
            <Text style={styles.resultText}>{message}</Text>
          </View>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create ({
  containerForm: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    width: 400,
    height: 600,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
    marginTop: -200,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Form;
