
const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['nutrition'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 16.0) result.innerHTML =
			`Mal Nutrition | Severe Thinness: <span>${bmi}</span>`;
    else if (bmi > 16.0 && bmi <=16.9 )
			result.innerHTML =
				`Moredate Thinness <span>${bmi}</span>`;
    else if (bmi >= 17.0 && bmi <= 18.5)
        result.innerHTML =
          `Mild Thinness: <span>${bmi}</span>`;
		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal Weight Range: <span style="color:#0be881">${bmi}</span>
        <span style="color:#0be881"> Great News!! </span>`;
     else if(bmi >= 25 && bmi < 29.9 ) 
    	result.innerHTML =
     `Overweight: <span style="color:#ff884d">${bmi}</span>
     <span style="color:#ff884d"> Is time to make workout and eat healthier!! </span>`;
     else if (bmi >= 30.0 && bmi < 34.9)
			result.innerHTML =
				`Obesity Class I: <span style="color:#ff5e57">${bmi}</span>
        <span style="color:#ff5e57"> WARNING high risk of heart attacks and metabolic disease </span>`;
        
     else if (bmi >= 35.0 && bmi < 39.9)
        result.innerHTML =
        `Obesity Class II: <span style="color:#ff5e57">${bmi}</span>
        <span style="color:#ff5e57">WARNING high risk of heart attacks and metabolic disease </span>`;  
		else result.innerHTML =
			`Obesity Class III or Morbid Obesity: <span style="color:#ff5e57">${bmi}</span>
      <span style="color:#ff5e57">WARNING high risk of heart attacks and metabolic disease </span>`;
	}
}
