import { connect } from "react-redux";
import CalendarBoard from "./components/CalendarBoard/container";
import { createCalendar } from "../../services/calendar";


const mapStateToProps = state => ({ calendar: state.calendar });

const mergeProps = stateProps => ({
	calendar: createCalendar(stateProps.calendar)
  });
  
  export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);
  

import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const App = () =>(
	<Provider store={store}>
		<CalendarBoard />
	</Provider>
);