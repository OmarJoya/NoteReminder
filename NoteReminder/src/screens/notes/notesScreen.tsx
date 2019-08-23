import React from 'react'
import { View, Text, ProgressBarAndroid, Platform, ProgressViewIOS, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { getNotes } from '../../actions/notes-actions';
import { connect } from 'react-redux';
import Note from '../../models/Note';
import { Card } from 'react-native-elements'
import styles from './notesScreen.style'
import Moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    getNotes: () => void
    notes: Array<Note>
    loading: boolean
    errorMessage: string
}

class notesScreen extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    componentDidMount() {
        this.props.getNotes()
    }

    onMorePressed = (noteTitle: string) => {
        Alert.alert(
            'Delete note?',
            noteTitle,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive' }
            ]
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.props.loading &&
                    <View style={styles.progressBarContainer}>
                        {Platform.OS === 'ios' ? <ProgressViewIOS progressTintColor='#2196F3' /> : <ProgressBarAndroid color='#2196F3' />}
                    </View>}
                {!this.props.loading &&
                    <ScrollView style={{ marginBottom: 10 }}>
                        {this.props.notes.map((note, index) => {
                            const containerStyle = {
                                backgroundColor: note.color,
                                borderRadius: 10
                            }
                            return (
                                <Card key={index} containerStyle={containerStyle}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexGrow: 1, marginEnd: 5 }}>
                                            <Text numberOfLines={1} style={styles.noteTitle}>{note.title}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Icon name='ellipsis-v' size={20} color={'black'} onPress={() => this.onMorePressed(note.title)} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text numberOfLines={1}>{note.content}</Text>
                                    <Text style={styles.noteDate}>{Moment(note.date).format('lll')}</Text>
                                </Card>
                            )
                        })}
                    </ScrollView>}
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