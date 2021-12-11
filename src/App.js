import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* 첫번째 페이지를 의미 */}
          <Route exact path="/">
            <DayList />
          </Route>
          {/* url에 있는 day 1의 값을 얻고 싶을때 */}
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
