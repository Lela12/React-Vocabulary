import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("http://localhost:3006/days");
  const history = useHistory();
  function addDay(e) {
    e.preventDefault();
    // 스크롤 위치 확인, 포커스 줄 때 사용

    fetch(`http://localhost:3006/days/`, {
      // 요청들의 옵션 입력
      method: "POST",
      headers: {
        //   보내는 리소스의 타입
        "Content-Type": "application/json",
      },
      //   수정에 대한 정보들을 실어서 보내줌
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        history.push(`/`);
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
