document.addEventListener("DOMContentLoaded", () => {
  const shakeMessage = document.getElementById("shake-message");
  const video = document.getElementById("background-video");
  const gradientBackground = document.getElementById("gradient-background");
  const beginButton = document.getElementById("begin-button");
  const pradetiButton = document.getElementById("pradeti-button");
  const moreButton = document.getElementById("more-button");
  const repeatButton = document.getElementById("repeat-button");
  const newButton = document.getElementById("new-button");
  const message = document.querySelector(".message");
  const timerDisplay = document.getElementById("timer");

  const messages = {
    default: [
      "Release",
      "I am peace",
      "I am grateful",
      "My body is my castle",
      "I am grateful for my body",
      "I design my life with intention, shaping its foundation and contents.",
      "Each day, I move closer to realizing my goals.",
      "My potential knows no bounds, and I fully embrace it.",
      "I focus on what I can change and release what I cannot.",
      "Every day, I am a better version of myself.",
      "I am confident in my ability to create meaningful change.",
      "Life's journey unfolds perfectly, and I trust my place within it.",
      "I celebrate my progress, no matter the scale.",
      "My choices reflect the best version of who I am.",
      "I pursue my dreams with courage and conviction.",
      "My energy inspires positivity wherever I go.",
      "I let go of doubt and welcome trust and belief.",
      "Joy is my choice.",
      "Gratitude fills my heart and guides my path.",
      "I attract abundance, love, and success with ease.",
      "My mindset is my greatest strength.",
      "I radiate kindness, light, and positivity.",
      "I trust the natural timing of life.",
      "I release what no longer serves me and make room for the new.",
      "I feel peaceful in the present and excited for the future.",
      "I live each day with purpose, passion, and focus.",
      "I am disciplined, bold, and persistent in my goals.",
      "I strive for clarity, create energy, and act with bravery.",
      "I am surrounded by supportive and inspiring people.",
      "My habits align with my highest aspirations.",
      "I show up as my best self in every situation.",
      "I live intentionally, love deeply, and lead authentically.",
      "I am grateful for the opportunity to grow and contribute daily.",
      "I am dedicated to living fully and leaving a positive legacy.",
      "Challenges strengthen me, and I honor the growth they bring.",
      "I flow with life's rhythm and trust its guidance.",
      "I replace fear with love in all that I do.",
      "I welcome miracles into my life.",
      "I practice forgiveness, creating space for inner peace.",
      "I trust my inner wisdom and follow it with confidence.",
      "I welcome unlimited joy and abundance.",
      "Obstacles are opportunities for me to grow and learn.",
      "Creativity and inspiration flow through me naturally.",
      "I stay grounded and open to the magic of the present moment.",
      "Life supports me, everything is working out for me.",
      "I release into the flow of a happy life.",
      "I choose love instead of this thought.",
    ],
    lithuanian: [
      "Paleidžiu.",
      "Aš esu meilė.",
      "Myliu savo kūną.",
      "Ačiū už šią akimirką.",
      "Renkuosi matyti tai kitaip.",
      "Įkvepiu ramybę, iškvėpiu negatyvą.",
      "Aš sąmoningai kuriu savo gyvenimą.",
      "Šiandien žengiu dar vieną žingsnį link savo tikslų.",
      "Mano potencialas yra neribotas.",
      "Susitelkiu į tai, ką galiu keisti, ir paleidžiu tai, ko negaliu.",
      "Kasdien tampu geresne savo versija.",
      "Tikiu, jog galiu pajudėti teigiama linkme.",
      "Pasitikiu gyvenimo eiga ir žinau, kad esu ten, kur turiu būti.",
      "Didžiuojuosi savo pažanga, nepaisant jos dydžio.",
      "Mano sprendimai atspindi mano geriausią savastį.",
      "Turiu drąsos užtikrintai siekti savo svajonių.",
      "Renkuosi meilę vietoje nerimo ar baimės.",
      "Paleidžiu abejones ir priimu tikėjimą savimi.",
      "Pasirenku džiaugsmą, nepaisant situacijos.",
      "Dėkingumas užpildo mano širdį vesdamas mane.",
      "Esu meilės, gausos ir sėkmės magnetas.",
      "Mano mąstymas yra mano didžiausia galia.",
      "Spinduliuoju šviesą, meilę ir pozityvumą.",
      "Pasitikiu natūraliu gyvenimo ritmu.",
      "Paleidžiu tai, kas nebetinka, ir atveriu vietą naujiems dalykams.",
      "Esu ramybėje ir priimu stebuklus.",
      "Kiekvieną dieną gyvenu su prasme, aistra ir dėmesiu.",
      "Nuosekliai ir drąsiai siekiu savo tikslų.",
      "Siekiu aiškumo, kuriu energiją ir drąsiai veikiu.",
      "Esu apsupta įkvepiančių ir palaikančių žmonių.",
      "Mano įpročiai atitinka mano aukščiausius tikslus.",
      "Kiekvienoje situacijoje rodau geriausią savo versiją.",
      "Gyvenu sąmoningai, myliu nuoširdžiai ir vadovauju autentiškai.",
      "Dėkui už galimybę augti ir kurti kasdien.",
      "Dėkui už gyvenimo pilnatvę.",
      "Kiekviena kova mane stiprina ir suteikia išminties.",
      "Pasitikiu gyvenimo tėkme ir leidžiu jai kurti.",
      "Pakeičiu baimę meile visuose savo veiksmuose.",
      "Kasdien atveriu širdį gyvenimo stebuklams.",
      "Atleidžiu sau ir kitiems.",
      "Pasitikiu savo vidiniu balsu ir seku juo.",
      "Neribota gausa ir laimė yra mano.",
      "Kliūtys – galimybė augti.",
      "Žvelgiu į dabartį kūrybiškai.",
      "Įkvėpimas mane veda pirmyn.",
      "Renkuosi jausti meilę vietoje šios minties.",
      "Priimu stebuklus.",
      "Esu laimingoje gyvenimo tėkmėje.",
      "Ši akimirka ir yra stebuklas.",
      "Gyvenimas mane palaiko ir viskas vyksta taip, kaip turi.",
    ],
  };

  const videos = [
    "https://www.dropbox.com/scl/fi/6jn4jqfgg0fg9ihj7a06x/breathe_01.mp4?rlkey=8s358ygma9ny9udijd6je0vqk&st=nogsp164&dl=1",
    "https://www.dropbox.com/scl/fi/0pbvt69v86iofcczyzz9b/breathe_06L.mp4?rlkey=6dw3dhbt3ee1ypd7c9phwek2t&st=0tlqeimw&dl=1",
    "https://www.dropbox.com/scl/fi/nbehf590cmcmsv96c5byj/breathe_07L.mp4?rlkey=j5grndy15usou0vqy26wmbjg9&st=2udp56kr&dl=1",
    "https://www.dropbox.com/scl/fi/dn0pznq13e0zvmgv77v29/breathe_02L.mp4?rlkey=19aoegabzo4hcv0ma58r7cm8b&st=xlqu66vl&dl=1",
    "https://www.dropbox.com/scl/fi/lsmyb2y3tp1jnpo4eyxn9/breathe_08L.mp4?rlkey=i5jy5tu1yigbzrd1mp1za2z77&st=rlx1anfm&dl=1",
  ];

  const CACHE_NAME = 'meditation-videos-cache-v1';
  
  // Store video Blobs locally in IndexedDB for better offline performance
  const DB_NAME = 'MindLumeDB';
  const DB_VERSION = 1;
  const STORE_NAME = 'videoStore';
  let db;
  
  // Initialize IndexedDB
  function initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      
      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
        reject(event.target.error);
      };
      
      request.onsuccess = (event) => {
        db = event.target.result;
        console.log('IndexedDB initialized successfully');
        resolve(db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          console.log('Video store created');
        }
      };
    });
  }
  
  // Save video blob to IndexedDB
  function saveVideoToIndexedDB(videoUrl, blob) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      
      const videoObject = {
        id: videoUrl,
        blob: blob,
        timestamp: new Date().getTime()
      };
      
      const request = store.put(videoObject);
      
      request.onsuccess = () => {
        console.log(`Video saved to IndexedDB: ${videoUrl}`);
        resolve();
      };
      
      request.onerror = (event) => {
        console.error(`Error saving video to IndexedDB: ${event.target.error}`);
        reject(event.target.error);
      };
    });
  }
  
  // Get video blob from IndexedDB
  function getVideoFromIndexedDB(videoUrl) {
    return new Promise((resolve, reject) => {
      if (!db) {
        reject(new Error('Database not initialized'));
        return;
      }
      
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(videoUrl);
      
      request.onsuccess = (event) => {
        if (event.target.result) {
          console.log(`Video found in IndexedDB: ${videoUrl}`);
          resolve(event.target.result.blob);
        } else {
          console.log(`Video not found in IndexedDB: ${videoUrl}`);
          resolve(null);
        }
      };
      
      request.onerror = (event) => {
        console.error(`Error getting video from IndexedDB: ${event.target.error}`);
        reject(event.target.error);
      };
    });
  }

  async function cacheVideos() {
    try {
      await initDB();
      
      // Check if we've already stored videos in IndexedDB
      const allStored = await Promise.all(
        videos.map(async (videoUrl) => {
          const blob = await getVideoFromIndexedDB(videoUrl);
          return !!blob;
        })
      );
      
      if (allStored.every(Boolean)) {
        console.log('All videos already cached in IndexedDB');
        shakeMessage.textContent = 'Shake your phone to receive a new message.\nPapurtykite telefoną - išvysite naują žinutę.';
        return;
      }
      
      shakeMessage.textContent = 'Downloading meditation videos... Please wait.';
      
      // Open cache for network fallback
      const cache = await caches.open(CACHE_NAME);
      
      const cachePromises = videos.map(async (videoUrl) => {
        try {
          // Check if already in IndexedDB
          const storedBlob = await getVideoFromIndexedDB(videoUrl);
          if (storedBlob) {
            return;
          }
          
          // Try to get from cache first
          const cachedResponse = await cache.match(videoUrl);
          if (cachedResponse) {
            const blob = await cachedResponse.blob();
            await saveVideoToIndexedDB(videoUrl, blob);
            return;
          }
          
          // If not in cache, fetch from network
          const response = await fetch(videoUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${videoUrl}`);
          }
          
          const blob = await response.clone().blob();
          await saveVideoToIndexedDB(videoUrl, blob);
          
          // Also update cache
          await cache.put(videoUrl, response);
          
          console.log(`Cached: ${videoUrl}`);
        } catch (error) {
          console.error(`Error caching video ${videoUrl}:`, error);
        }
      });
      
      await Promise.all(cachePromises);
      
      shakeMessage.textContent = 'Shake your phone to receive a new message.\nPapurtykite telefoną - išvysite naują žinutę.';
    } catch (error) {
      console.error('Video caching error:', error);
      shakeMessage.textContent = 'Error downloading videos. Please check your connection.';
    }
  }

  let countdown;
  let currentMessage = "";
  let currentVideo = "";
  let language = "default";

  const updateContent = async () => {
    try {
      // Add loading indicator to video container
      video.style.display = "none";
      gradientBackground.style.opacity = "1";
      
      const selectedVideo = videos[Math.floor(Math.random() * videos.length)];
      let videoSrc;
      
      try {
        // Try to get from IndexedDB first
        const blob = await getVideoFromIndexedDB(selectedVideo);
        if (blob) {
          videoSrc = URL.createObjectURL(blob);
        } else {
          // If not in IndexedDB, try cache
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(selectedVideo);
          
          if (cachedResponse) {
            const videoBlob = await cachedResponse.blob();
            await saveVideoToIndexedDB(selectedVideo, videoBlob);
            videoSrc = URL.createObjectURL(videoBlob);
          } else {
            // Last resort - fetch from network
            const response = await fetch(selectedVideo);
            const videoBlob = await response.blob();
            await saveVideoToIndexedDB(selectedVideo, videoBlob);
            videoSrc = URL.createObjectURL(videoBlob);
          }
        }
      } catch (error) {
        console.error('Error getting video:', error);
        // Use the URL directly if we couldn't get the blob
        videoSrc = selectedVideo;
      }

      currentVideo = videoSrc;
      currentMessage = messages[language][Math.floor(Math.random() * messages[language].length)];
      
      // Configure video element
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('autoplay', '');
      video.style.objectFit = 'cover';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.position = 'fixed';
      video.style.top = '0';
      video.style.left = '0';
      video.style.zIndex = '-2';
      
      // Ensure no controls are displayed
      video.removeAttribute('controls');
      video.controls = false;
      video.disableRemotePlayback = true;
      if (video.controlsList) {
        video.controlsList.add('nodownload');
        video.controlsList.add('noplaybackrate');
        video.controlsList.add('nofullscreen');
      }
      
      // Set source and start loading
      video.src = currentVideo;
      
      // Ensure video plays automatically
      video.load();
      
      // Wait for metadata to load
      await new Promise(resolve => {
        video.onloadedmetadata = resolve;
        // Add timeout in case metadata loading fails
        setTimeout(resolve, 3000);
      });
      
      // Show video and hide gradient
      video.style.display = "block";
      
      // Try to play the video
      try {
        await video.play();
        setTimeout(() => {
          gradientBackground.style.opacity = "0";
        }, 500);
      } catch (e) {
        console.warn("Autoplay was prevented:", e);
        // Force a user interaction to play
        const forcePlay = () => {
          video.play().catch(err => console.error("Still can't play:", err));
          document.removeEventListener('touchstart', forcePlay);
          document.removeEventListener('click', forcePlay);
        };
        document.addEventListener('touchstart', forcePlay, { once: true });
        document.addEventListener('click', forcePlay, { once: true });
      }
      
      // Update message text
      message.textContent = currentMessage;
      
    } catch (error) {
      console.error('Error updating content:', error);
      // Show fallback in case of error
      gradientBackground.style.opacity = "1";
      message.textContent = currentMessage || "Take a deep breath and center yourself.";
    }
  };

  cacheVideos();

  const startTimer = (minutes) => {
    clearInterval(countdown);
    let timeRemaining = minutes * 60;

    countdown = setInterval(() => {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      if (timeRemaining <= 0) {
        clearInterval(countdown);
        endTimer();
      }

      timeRemaining--;
    }, 1000);
  };

  const endTimer = () => {
    timerDisplay.textContent = "";
    message.textContent = "";
    moreButton.classList.add("hidden");
    repeatButton.classList.remove("hidden");
    newButton.classList.remove("hidden");
    newButton.textContent = language === "lithuanian" ? "Naujas" : "New";
  };

  const repeatSession = () => {
    message.textContent = currentMessage;
    startTimer(2);
    repeatButton.classList.add("hidden");
    newButton.classList.add("hidden");
    moreButton.classList.remove("hidden");
  };

  const newSession = () => {
    updateContent();
    startTimer(2);
    repeatButton.classList.add("hidden");
    newButton.classList.add("hidden");
    moreButton.classList.remove("hidden");
  };

  const hideShakeMessage = () => {
    shakeMessage.style.display = "none";
  };

  const detectShake = () => {
    let lastTime = 0;
    let x, y, z, lastX, lastY, lastZ;
    window.addEventListener("devicemotion", function (event) {
      let acceleration = event.accelerationIncludingGravity;
      let currTime = new Date().getTime();
      if (currTime - lastTime > 100) {
        let diffTime = currTime - lastTime;
        lastTime = currTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;

        let speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
        if (speed > 2000) {
          hideShakeMessage();
          newSession(); // Trigger new session upon shake
        }

        lastX = x;
        lastY = y;
        lastZ = z;
      }
    });
  };

  detectShake();

  beginButton.addEventListener("click", () => {
    hideShakeMessage();
    language = "default";
    updateContent();
    startTimer(2);
    beginButton.classList.add("hidden");
    pradetiButton.classList.add("hidden");
    moreButton.textContent = "More";
    repeatButton.textContent = "Repeat";
    moreButton.classList.remove("hidden");
  });

  pradetiButton.addEventListener("click", () => {
    hideShakeMessage();
    language = "lithuanian";
    updateContent();
    startTimer(2);
    beginButton.classList.add("hidden");
    pradetiButton.classList.add("hidden");
    moreButton.textContent = "Daugiau";
    repeatButton.textContent = "Kartoti";
    moreButton.classList.remove("hidden");
  });

  moreButton.addEventListener("click", updateContent);
  repeatButton.addEventListener("click", repeatSession);
  newButton.addEventListener("click", newSession);
  
  // Add event listener for video errors
  video.addEventListener('error', () => {
    console.error('Video error occurred');
    gradientBackground.style.opacity = "1";
    // Try to reload the video or show fallback
    setTimeout(updateContent, 3000);
  });
});
