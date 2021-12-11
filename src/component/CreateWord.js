import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("https://localhost:3006/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    // 스크롤 위치 확인, 포커스 줄 때 사용

    fetch(`http://localhost:3006/words/`, {
      // 요청들의 옵션 입력
      method: "POST",
      headers: {
        //   보내는 리소스의 타입
        "Content-Type": "application/json",
      },
      //   수정에 대한 정보들을 실어서 보내줌
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  }
  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="computer" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
