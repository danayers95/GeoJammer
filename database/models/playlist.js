const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.promise = Promise;

const playlistSchema = new Schema({
  playlistName: { type: String, unique: true },
  coordinates: { type: String, unique: true },
});

playlistSchema.methods = {
  createPlaylist: function (newPlaylistName, coordinates) {
    const playlistModel = mongoose.model('Playlist', playlistSchema);
    const newPlaylist = new playlistModel({ playlistName: newPlaylistName, coordinates: coordinates});
    /* newPlaylist.save(function (err, newPlaylist) {
      if (err) return console.error(err);
    }); */
    newPlaylist.save();
  },
  getPlaylist: function (coordinates) {
    const playlistModel = mongoose.model('Playlist', playlistSchema);
    return playlistModel.find({ coordinates: coordinates});
  }
}; 

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
