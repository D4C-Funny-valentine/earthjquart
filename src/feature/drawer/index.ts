import { useAppDispatch, useAppSelector } from "../../hooks/useRedux"
import { toggleDrawer } from "./drawer.slice";

const useDrawer = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.drawer.open);

    const changeToggleDrawer = () => {
        dispatch(toggleDrawer())
    }

    return {
        open,
        changeToggleDrawer
    }
}

export default useDrawer
export {default as drawerReducer} from "./drawer.slice";