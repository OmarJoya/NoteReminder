import { Action } from "redux";
import { notesConstants } from "../constants/notes-constants";
import Note from "../models/Note";

export interface IActionFetch extends Action {
    type: notesConstants.FETCH_NOTES_BEGIN
}

export interface IActionFetchError extends Action {
    type: notesConstants.FETCH_NOTES_ERROR,
    errorMessage: string
}
export interface IActionFetchSuccess extends Action {
    type: notesConstants.FETCH_NOTES_SUCCESS,
    notes: Array<Note>
}

export type NotesType = IActionFetch | IActionFetchError | IActionFetchSuccess;