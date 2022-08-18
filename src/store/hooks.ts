import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "./index";
import {connectionsReducerActions} from "./connectionsSlice";
import { bindActionCreators } from '@reduxjs/toolkit';

export const useAppDispatch:() => AppDispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const allActions = {
    ...connectionsReducerActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};