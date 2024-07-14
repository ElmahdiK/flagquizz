import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Image from "react-native-remote-svg";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const _nbMaxQuestions = 10;
  const [questions, setQuestions] = useState();
  const [options, setOptions] = useState([]);
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const getQuiz = async (_) => {
  //   setIsLoading(true);
  //   const url = `https://opentdb.com/api.php?amount=10&category=22&type=multiple&encode=url3986`;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setQuestions(data.results);
  //   setOptions(generateOptionsAndShuffle(data.results[0]));
  //   setIsLoading(false);
  // };

  const getRandomInt = (max) => Math.floor(Math.random() * max);
  // getRandomInt(3) => expected output: 0, 1 or 2

  const generateRandNumArray = (_nbElement = 4, _max) => {
    let _arr = [];
    let _num = 0;
    while (_arr.length < _nbElement) {
      _num = getRandomInt(_max);
      if (_arr.indexOf(_num) === -1) _arr.push(_num);
    }
    return _arr;
  };

  const createQuiz = (_countries) => {
    let _result = [];
    let _arr = [];
    for (let i = 0; i < _nbMaxQuestions; i++) {
      _arr = generateRandNumArray(4, 306);
      _result.push({
        question: _countries[_arr[0]][0],
        correct_answer: _countries[_arr[0]][1],
        incorrect_answers: [
          _countries[_arr[1]][1],
          _countries[_arr[2]][1],
          _countries[_arr[3]][1],
        ],
      });
    }
    return _result;
  };

  const getQuiz = async (_) => {
    setIsLoading(true);
    const url = `https://flagcdn.com/en/codes.json`;
    const res = await fetch(url);
    const data = await res.json();
    const results = createQuiz(Object.entries(data));

    setQuestions(results);
    setOptions(generateOptionsAndShuffle(results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = (_) => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 1);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.viewLoading}>
          <Text style={styles.viewLoadingText}>Loading...</Text>
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>

            <View style={styles.top}>
              {/* <Text style={styles.question}>
                Q.{ques + 1} - {decodeURIComponent(questions[ques].question)}
              </Text> */}
              <View style={styles.topTitle}>
                <Text style={styles.textScore}>Score: {score}</Text>
                <Text style={styles.textScore}>
                  Flag: {ques + 1}/{_nbMaxQuestions}
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    `https://flagcdn.com/` +
                    decodeURIComponent(questions[ques].question) +
                    `.svg`,
                }}
                style={styles.banner}
                resizeMode="contain"
              />
            </View>

            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeb3b",
    padding: 50
  },
  parent: {
    // backgroundColor: "orange",
    height: "100%"
  },
  top: {
    flex: 1,
    justifyContent:'space-evenly'
  },
  options:{
    // backgroundColor: "orangered",
    flex: 1,
    justifyContent:'flex-end',
  },
  optionButton: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 4,
    borderRadius: 0,
    paddingHorizontal: 1,
    alignItems: "center",
  },
  option: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textTransform: "uppercase",
  },
  viewLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  viewLoadingText: {
    fontSize: 32,
    fontWeight: "700",
  },
  topTitle:{
    paddingBottom: 50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textScore: {
    fontWeight: "800",
    fontSize: 22,
    alignSelf: "center",
    alignContent:'center',
    justifyContent:'center',
    color: "#000",
  },
  banner: {
    width: '100%',
    height: 200,
    justifyContent: "center",
  },
});
