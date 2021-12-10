import dummy from "../db/data.json";
// url에 포함된 값을 얻을때
import { useParams } from "react-router";

export default function Day() {
  //dummy.words
  //day가 특정값만 나타낼 수 있게
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
