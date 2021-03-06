import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.state = {
      searchResults: [{name: 'name1', artist: 'artist1', album: 'ablum1', id: 1},{name: 'name2', artist: 'artist2', album: 'ablum2', id: 2}, {name: 'name3', artist: 'artist3', album: 'ablum3', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAblum1', id: 4},{name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAblum1', id: 5}, {name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAblum1', id: 6}]
    }
  }

  addTrack(newTrack){
    let tracks = this.state.playlistTracks;
    if(tracks.find(track => track.id === newTrack.id)){
      return;
    }
    tracks.push(newTrack);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(removedTrack){
    let tracks = this.state.playlistTracks;
    let keptTracks = tracks.filter(track => track.id !== removedTrack.id)

    this.setState({playlistTracks: keptTracks})
  }

  updatePlaylistName(newName){
    this.setState({playlistName: newName})
  }

  render() {
    return (
            <div>
              <h1>Ja<span className = 'highlight'>mmm</span>ing</h1>
              <div className = 'App'> 
                <SearchBar /> 
                <div className = 'App-playlist'>
                  <SearchResults searchResults = {this.state.searchResults} 
                                 onAdd = {this.addTrack} />
                  <Playlist playlistName = {this.state.playlistName} 
                            playlistTracks = {this.state.playlistTracks}
                            onRemove = {this.removeTrack}
                            onNameChange = {this.updatePlaylistName} />
                </div>
              </div>
            </div>
           )
  }
}

export default App;
