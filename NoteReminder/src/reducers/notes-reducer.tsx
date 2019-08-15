import { Reducer } from "redux";
import Note from "../models/Note";
import { NotesType } from "../types/notes-types";
import { notesConstants } from "../constants/notes-constants";

export interface NotesState {
    loading: boolean,
    notes: Array<Note>,
    errorMessage?: string
}

let initialState = {
    notes: [],
    loading: true,
    errorMessage: ''
}

const notesReducer: Reducer<NotesState, NotesType> = (state = initialState, action: NotesType) => {
    switch (action.type) {
        case notesConstants.FETCH_NOTES_BEGIN:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        case notesConstants.FETCH_NOTES_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage
            }
        case notesConstants.FETCH_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: '',
                notes: action.notes
            }
        default:
            return state;
    }
}

export default notesReducer