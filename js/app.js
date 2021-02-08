const songSearch = () => {
  const searchInput = document.getElementById("searchinput");
  const apiUrl = `https://api.lyrics.ovh/suggest/${searchInput.value}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => displaysongDe(data.data));
};

const displaysongDe = (songs) => {
  songs.forEach((song) => {
    const searchResultContent = document.getElementById("searchResultContent");
    const div = document.createElement("div");
    div.className = `single-result row align-items-center my-3 p-3`;
    div.innerHTML = `
    <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
    </div>
        <div class="col-md-3 text-md-right text-center">
        <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
    </div>`;
    searchResultContent.appendChild(div);
  });
};

const getLyric = (artist, title) => {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data.lyrics));
};
const showData = (lyrics) => {
  const showingdiv = document.getElementById("song-container");
  showingdiv.innerText = lyrics;
};
