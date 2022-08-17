import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "./index";
import {connectionsReducerActions} from "./connectionsSlice";
import { bindActionCreators } from '@reduxjs/toolkit';
import {counterReducerActions} from "./counterSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const allActions = {
    ...connectionsReducerActions,
    ...counterReducerActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
