import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3006/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            {/* 각 날짜에 맞춰 이동할 수 있게 */}
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
