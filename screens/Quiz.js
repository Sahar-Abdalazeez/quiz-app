import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  //handle next pressed
  const handleNextPressed = () => {
    setQues(ques + 1);
  };
  return (
    <View style={styles.container}>
      {questions && (
        <>
          <View style={styles.options}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q{ques + 1}.{decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool option1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool option2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool option3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool option4 </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            {ques < 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleNextPressed}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
            {ques === 9 && (
              <TouchableOpacity style={styles.button} onPress={() => null}>
                <Text style={styles.buttonText}>Show Result</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1a759f',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
