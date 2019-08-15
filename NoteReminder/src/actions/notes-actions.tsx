import { notesConstants } from "../constants/notes-constants";
import Note from "../models/Note";
import * as NotesType from "../types/notes-types";

const fetchDataBegin = (): NotesType.IActionFetch => {
    return {
        type: notesConstants.FETCH_NOTES_BEGIN
    }
};


const fetchDataError = (e: Error): NotesType.IActionFetchError => {
    return {
        type: notesConstants.FETCH_NOTES_ERROR,
        errorMessage: e.message
    };
}


const fetchDataSuccess = (notes: Array<Note>): NotesType.IActionFetchSuccess => {
    return {
        type: notesConstants.FETCH_NOTES_SUCCESS,
        notes
    }
};

export const getNotes = () => {
    return (dispatch: any) => {
        dispatch(fetchDataBegin())
        setTimeout(() => {
            const notes: Array<Note> = [{
                title: "Note 1",
                color: "yellow",
                content: "This is a new note"
            }];
            dispatch(fetchDataSuccess(notes));
        }, 2000);
    }
}