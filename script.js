const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    channel: "Rick Astley",
    views: "1.6B views",
    age: "15 years ago",
    cat: "Music",
    time: "3:33"
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi - Despacito ft. Daddy Yankee",
    channel: "Luis Fonsi",
    views: "8.7B views",
    age: "9 years ago",
    cat: "Music",
    time: "4:42"
  },
  {
    id: "9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE",
    channel: "officialpsy",
    views: "5.5B views",
    age: "14 years ago",
    cat: "Music",
    time: "4:13"
  },
  {
    id: "3JZ_D3ELwOQ",
    title: "Mark Ronson - Uptown Funk ft. Bruno Mars",
    channel: "Mark Ronson",
    views: "5.3B views",
    age: "11 years ago",
    cat: "Music",
    time: "4:31"
  },
  {
    id: "M7lc1UVf-VE",
    title: "YouTube Player API Demo",
    channel: "YouTube",
    views: "12M views",
    age: "10 years ago",
    cat: "Tech",
    time: "1:00"
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Big Buck Bunny - Animation",
    channel: "Blender",
    views: "20M views",
    age: "8 years ago",
    cat: "Gaming",
    time: "9:56"
  },
  {
    id: "ysz5S6PUM-U",
    title: "HTML, CSS and JavaScript Tutorial",
    channel: "Web Dev",
    views: "7.2M views",
    age: "4 years ago",
    cat: "Tech",
    time: "12:45"
  },
  {
    id: "L_jWHffIx5E",
    title: "Smash Mouth - All Star",
    channel: "Smash Mouth",
    views: "500M views",
    age: "15 years ago",
    cat: "Music",
    time: "3:21"
  }
];

function createCard(video) {
  return `
    <article class="card" onclick='watchVideo(
      "${video.id}",
      ${JSON.stringify(video.title)},
      ${JSON.stringify(video.channel)}
    )'>
      <div class="thumb">
        <img
          src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg"
          onerror="this.src='https://placehold.co/640x360/222/fff?text=Video'"
        >
        <span class="time">${video.time}</span>
      </div>

      <div class="info">
        <div class="mini">▶</div>
        <div>
          <div class="title">${video.title}</div>
          <div class="meta">
            ${video.channel}<br>
            ${video.views} • ${video.age}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderVideos(list = videos) {
  document.getElementById("grid").innerHTML =
    list.map(createCard).join("");
}

function watchVideo(id, title, channel) {
  document.getElementById("home").style.display = "none";
  document.getElementById("watch").style.display = "block";

  document.getElementById("iframe").src =
    "https://www.youtube.com/embed/" + id + "?autoplay=1";

  document.getElementById("watchTitle").textContent = title;
  document.getElementById("channelName").textContent = channel;

  window.scrollTo(0, 0);
}

function showHome() {
  document.getElementById("watch").style.display = "none";
  document.getElementById("home").style.display = "block";
  renderVideos(videos);
}

function filterCategory(category) {
  renderVideos(
    videos.filter(video => video.cat === category)
  );
}

function searchVideos() {
  const query = document
    .getElementById("search")
    .value
    .toLowerCase()
    .trim();

  if (!query) {
    renderVideos(videos);
    return;
  }

  const results = videos.filter(video => {
    const searchable =
      video.title +
      " " +
      video.channel +
      " " +
      video.cat;

    return searchable.toLowerCase().includes(query);
  });

  renderVideos(results);
}

document
  .getElementById("search")
  .addEventListener("keydown", event => {
    if (event.key === "Enter") {
      searchVideos();
    }
  });

renderVideos();
