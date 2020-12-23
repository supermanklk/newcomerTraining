import { createStore} from "redux";
import reducer from "../components/todolist/reducer";

const store = createStore(reducer)
export default store