// url에 포함된 값을 얻을때
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3004/words?day=${day}`);

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
