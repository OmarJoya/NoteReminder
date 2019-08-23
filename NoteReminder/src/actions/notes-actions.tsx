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
                title: "Note 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                color: "white",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: new Date()
            },
            {
                title: "Note 2",
                color: "white",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: new Date()
            },
            {
                title: "Note 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                color: "white",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: new Date()
            }
            ];
            dispatch(fetchDataSuccess(notes));
        }, 1000);
    }
}