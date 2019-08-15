import React from 'react'
import { View, Text } from 'react-native';
import { getNotes } from '../../actions/notes-actions';
import { connect } from 'react-redux';
import Note from '../../models/Note';

interface Props {
    getNotes: () => void
    notes: Array<Note>
    loading: boolean
    errorMessage: string
}

interface State {

}

class notesScreen extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <View>
                {this.props.loading && <Text>Getting data...</Text>}
                <Text>Count: {this.props.notes.length}</Text>
            </View>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        loading: state.notesReducer.loading,
        notes: state.notesReducer.notes,
        errorMessage: state.notesReducer.errorMessage
    }
}

function mapDispathToProps(dispatch: any) {
    return {
        getNotes: () => dispatch(getNotes())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(notesScreen)