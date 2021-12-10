// url에 포함된 값을 얻을때
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Word from "./Word";

export default function Day() {
  //dummy.words
  //day가 특정값만 나타낼 수 있게(주소창에 있는 문자열)
  const { day } = useParams();
  // const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3004/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
