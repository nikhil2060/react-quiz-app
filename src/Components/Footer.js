import NextButton from "./NextButton";
import Timer from "./Timer";

function Footer({ dispatch, answer, index, numQuestions, sec }) {
  return (
    <div>
      <Timer dispatch={dispatch} sec={sec} />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
    </div>
  );
}

export default Footer;
