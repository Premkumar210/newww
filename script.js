var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")

menuIcon.onclick = function(){
   sidebar.classList.toggle("small-sidebar");
   container.classList.toggle("large-container");

}

function search() {
   var searchQuery = document.getElementById('search-box').value.toLowerCase();
   var pages = {
     'zack king': 'video.html',
     'zackking': 'video.html',
     'Zack king': 'video.html',
     'Zack': 'video.html',
     'zack': 'video.html',
     'hanumankind': 'video2.html',
     'Hanumankind': 'video2.html',
     'hanuman': 'video2.html',
     'messi fan page': 'video3.html',
     'messi fan ': 'video3.html',
     'messi': 'video3.html',
     'messi video': 'video3.html',
     'Messi': 'video3.html',
     'Messi fan page': 'video3.html',
     'brototype': 'video4.html',
     'Brototype': 'video4.html',
     'bro': 'video4.html',
     'india ': 'video5.html',
     'india today': 'video5.html',
     'India today': 'video5.html',
     'India Today': 'video5.html',
     'indiatoday': 'video5.html',
     'IndiaToday': 'video5.html',
     'village cooking channel': 'video6.html',
     'villagecooking channel': 'video6.html',
     'villagecookingchannel': 'video6.html',
     'Village Cooking channel': 'video6.html',
     'Village Cooking Channel': 'video6.html',
     'Village cooking channel': 'video6.html',
     'VillageCookingChannel': 'video6.html',
     'te vlogs': 'video7.html',
     'tevlogs': 'video7.html',
     'Te vlogs': 'video7.html',
     'TE vlogs': 'video7.html',
     'TE Vlogs': 'video7.html',
     'TEVlogs': 'video7.html',
     'ajmal': 'video7.html',
     'madan gowri': 'video8.html',
     'madangowri': 'video8.html',
     'Madan gowri': 'video8.html',
     'Madan Gowri': 'video8.html',
     'MadanGowri': 'video8.html',
     'hospital': 'video8.html',
     'introducing new education model': 'video9.html',
     'introducing new education': 'video9.html',
     'introducing ': 'video9.html',
     'introducingneweducationmodel': 'video9.html',
     'arjyou': 'video10.html',
     'kerala': 'video10.html',
     'Arjyou': 'video10.html',
     '2021': 'video10.html',
     'big dawgs': 'video2.html',
     'bigdawgs': 'video2.html',
     'Big dawgs': 'video2.html',
     'Bigdawgs': 'video2.html',
     'Big Dawgs': 'video2.html',
     'BigDawgs': 'video2.html',
     'big': 'video2.html',
   };
   
   if (pages[searchQuery]) {
     window.location.href = pages[searchQuery];
   } else {
     alert('Page not found!');
   }
 }
 
 let recording = false;
let audioContext = new AudioContext();
let audioStream;

function startRecording() {
  recording = true;
  document.querySelector('.mic-icon').style.display = 'none';
  document.querySelector('.stop-icon').style.display = 'block';
  
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      audioStream = stream;
      let mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      
      let audioChunks = [];
      mediaRecorder.ondataavailable = event => {
        audioChunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        let audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        let audioUrl = URL.createObjectURL(audioBlob);
        // Do something with the audio URL, like sending it to a server
      };
    })
    .catch(error => console.error('Error:', error));
}

function stopRecording() {
  recording = false;
  document.querySelector('.mic-icon').style.display = 'block';
  document.querySelector('.stop-icon').style.display = 'none';
  
  audioStream.getTracks().forEach(track => track.stop());
}

document.getElementById('videos-btn').addEventListener('click', function() {
  

  document.getElementById('tab-content').innerHTML = `
    <br>
     <br>
      <br>
       <br>
    <p>You dont have any videos .</p>
   
  `;
});

document.getElementById('playlists-btn').addEventListener('click', function() {
  document.getElementById('tab-content').innerHTML = `
     <br>
      <br>
       <br>
        <br>

    <p>You dont have any playlists.</p>
   
  `;
});

document.getElementById('channels-btn').addEventListener('click', function() {
  document.getElementById('tab-content').innerHTML = `
  <br>
   <br>
    <br>
     <br>
    <p>You have not created channels .</p>
   
  `;
});

function subscribe() {
  var btn = document.getElementById('subscribe-btn');
  if (btn.textContent === 'Subscribe') {
    btn.style.backgroundColor = 'red';
    btn.textContent = 'Subscribed';
  } else {
    btn.style.backgroundColor = ''; // reset to original color
    btn.textContent = 'Subscribe';
  }
}




