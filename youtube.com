<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MyTube</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>MyTube</h1>
    <input type="text" placeholder="Search...">
  </header>

  <main>
    <div class="video-grid">
      <div class="video-card">
        <img src="https://via.placeholder.com/300x200" alt="Video Thumbnail">
        <h3>Video Title 1</h3>
        <p>Some description here</p>
      </div>
      <div class="video-card">
        <img src="https://via.placeholder.com/300x200" alt="Video Thumbnail">
        <h3>Video Title 2</h3>
        <p>Some description here</p>
      </div>
      <!-- Add more video cards -->
    </div>
  </main>
</body>
</html>
