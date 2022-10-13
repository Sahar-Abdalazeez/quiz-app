import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Quiz = ({navigation}) => {
  const [questions, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  //function to shuffle an array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOptions(generateOptionsAndShuffleArray(data.results[0]));
  };

  useEffect(() => {
    getQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle next pressed
  const handleSkipPressed = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffleArray(questions[ques + 1]));
  };
  //generate options array and shuffling for the options
  const generateOptionsAndShuffleArray = question => {
    const questionOptions = [
      question.correct_answer,
      ...question.incorrect_answers,
    ];
    shuffle(questionOptions);
    return questionOptions;
  };

  //handle select option
  const handleSelectedOption = selectedOption => {
    console.log(selectedOption === questions[ques].correct_answer);
    if (selectedOption === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffleArray(questions[ques + 1]));
    }
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
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
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[0])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[1])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[2])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[3])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSelectedOption(options[0])}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity>
            {ques < 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleSkipPressed}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}
            {ques === 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}>
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
    backgroundColor: '#a85d03',
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
    color: '#a85d03',
    fontWeight: '600',
  },
  option: {
    fontSize: 26,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#f99113',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
});
