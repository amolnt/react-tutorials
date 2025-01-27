import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import ShowDropDown from "./components/ShowDropdown";
import AddDeleteSelectedListItem from './components/AddDeleteSelectedListItem';
import RadioButtonSetsAndShowTheInfo from './components/RadioButtonSetsAndShowTheInfo';
import SwapLists from './components/SwapLists';
import Pagingnation from './components/Pagingnation';
import "./index.css"
import ReactMemo from './components/Memo/ReactMemo';
import MemoizeCounter from './components/useMemoAnduseCallback/Memoize';
import LazyLoadingParentComponent from './components/LazyLoading/LazyLoadingParentComponent';
import ContextCounter from './components/Context/ContextCounter';
import CounterReducer from './components/CounterReducer';
import UseDefferedValueAnduseTransition from './components/useDeferedValueAnduseTransition';
import ReduxCounterProvider from './components/ReduxToolkit/ReduxCounterProvider';
import MSWDemoComponent from "./components/MSWDemoComponent"

function App() {
    return(
      <Router>
        <nav className={"navbar"}>
          <ul>
            <li>
              <Link to="/show-dropdown">Show Dropown</Link>
            </li>
            <li>
              <Link to="/add-delete-selected-todo">Add And Delete Todo</Link>
            </li>
            <li>
              <Link to="/radio-button-sets-and-show-the-info">Set Of Radio Button On select Show Info</Link>
            </li>
            <li>
              <Link to="/swap-list-items">Swap List Items</Link>
            </li>

            <li>
              <Link to="/pagingnation">Pagingnation</Link>
            </li>

            <li>
              <Link to="/memo">React memo</Link>
            </li>

            <li>
              <Link to="/useMemo-useCallback">useMemo & useCallback</Link>
            </li>
            <li>
              <Link to="/lazy-loading">Lazy Loading</Link>
            </li>
            <li>
              <Link to="/useContext">useContext</Link>
            </li>
            <li>
              <Link to="/useReducer">useReducer</Link>
            </li>
            <li>
              <Link to="/useDefferedValue-useTransition">useDefferedValue & useTransition</Link>
            </li>

            <li>
              <Link to="/redux-toolkit">Redux Toolkit</Link>
            </li>

            <li>
              <Link to="/msw">MSW Testing</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/show-dropdown" element={<ShowDropDown />} />
          <Route path="/add-delete-selected-todo" element={<AddDeleteSelectedListItem />} />
          <Route path="/radio-button-sets-and-show-the-info" element={<RadioButtonSetsAndShowTheInfo />} />
          <Route path="/swap-list-items" element={<SwapLists />} />
          <Route path="/pagingnation" element={<Pagingnation />} />
          <Route path="/memo" element={<ReactMemo />} />
          <Route path="/useMemo-useCallback" element={<MemoizeCounter />} />
          <Route path="/lazy-loading" element={<LazyLoadingParentComponent />} />
          <Route path="/useContext" element={<ContextCounter />} />
          <Route path="/useReducer" element={<CounterReducer />} />
          <Route path="/useDefferedValue-useTransition" element={<UseDefferedValueAnduseTransition />} />
          <Route path="/redux-toolkit" element={<ReduxCounterProvider />} />
          <Route path="/msw" element={<MSWDemoComponent />} />
        </Routes>
      </Router>
    )
}

export default App
