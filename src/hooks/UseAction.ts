import {bindActionCreators} from "redux";
import {useDispatch} from "react-redux";
import {allActionCreators} from "../store/reducers/action-creator";


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch as any)
}