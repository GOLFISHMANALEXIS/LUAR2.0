new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Cama y mesa",
          artist: "Roberto Carlos",
          cover: "https://m.media-amazon.com/images/I/51PBOUfvPXL._SY580_.jpg",
          source: "music/camaymesa.mp3",
          url: "https://www.youtube.com/watch?v=7Kae99G-Yqk",
          favorited: false
        },
        {
          name: "Remolino",
          artist: "Samo",
          cover: "https://direct.rhapsody.com/imageserver/images/alb.353878593/500x500.jpg",
          source: "music/remolino.mp3",
          url: "https://www.youtube.com/watch?v=QGfsSQzcsog",
          favorited: true
        },
        {
          name: "Besame",
          artist: "Ricardo Montaner",
          cover: "https://cdns-images.dzcdn.net/images/cover/7fd516383aabb68d1033f3caa4674ae6/264x264.jpg",
          source: "music/besamericardo.mp3",
          url: "https://www.youtube.com/watch?v=4BnHvbRlchA",
          favorited: false
        },
        {
          name: "Labios rotos",
          artist: "Zoe",
          cover: "https://images.genius.com/7a9ca0b5812d0faa7afb7c423e9ddc42.300x300x1.jpg",
          source: "music/labiosrotos.mp3",
          url: "https://www.youtube.com/watch?v=hKhekdrklpo",
          favorited: false
        },
        {
          name: "Soñe",
          artist: "Zoe",
          cover: "https://images.genius.com/7a9ca0b5812d0faa7afb7c423e9ddc42.300x300x1.jpg",
          source: "music/soñe.mp3",
          url: "https://www.youtube.com/watch?v=HJqlA_HTEU8",
          favorited: false
        },
        {
          name: "Love",
          artist: "Zoe",
          cover: "https://images.genius.com/7a9ca0b5812d0faa7afb7c423e9ddc42.300x300x1.jpg",
          source: "music/love.mp3",
          url: "https://www.youtube.com/watch?v=q3yJ_yDhNVk",
          favorited: true
        },
        {
          name: "Sweater weather",
          artist: "the neighbourhood",
          cover: "https://res.cloudinary.com/teepublic/image/private/s--Slio0clQ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1607391911/production/designs/17037304_0.jpg",
          source: "music/sweater.mp3",
          url: "https://www.youtube.com/watch?v=97LUyiK3oOM",
          favorited: false
        },
        {
          name: "Reflections",
          artist: "the neighbourhood",
          cover: "https://res.cloudinary.com/teepublic/image/private/s--Slio0clQ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1607391911/production/designs/17037304_0.jpg",
          source: "music/reflection.mp3",
          url: "https://www.youtube.com/watch?v=x47TgeRJtH0",
          favorited: true
        },
        {
          name: "Eres",
          artist: "Café Tacvba",
          cover: "https://i.ytimg.com/vi/6cjUGT6vcfU/maxresdefault.jpg",
          source: "music/erescafe.mp3",
          url: "https://www.youtube.com/watch?v=98Akpf1ph2o",
          favorited: false
        },
        {
          name: "Aprovechate",
          artist: "Café Tacvba",
          cover: "https://i.ytimg.com/vi/6cjUGT6vcfU/maxresdefault.jpg",
          source: "music/aprovechate.mp3",
          url: "https://www.youtube.com/watch?v=N9eroXvvCiI",
          favorited: false
        },
        {
          name: "Quiero ver",
          artist: "Café Tacvba",
          cover: "https://i.ytimg.com/vi/6cjUGT6vcfU/maxresdefault.jpg",
          source: "music/quiero.mp3",
          url: "https://www.youtube.com/watch?v=4kSuJwYoxkw",
          favorited: false
        },
        {
          name: "Solo tu",
          artist: "Luis Miguel",
          cover: "https://f.fcdn.app/imgs/113d85/www.palaciodelamusica.com.uy/pmusuy/d8d5/original/catalogo/661221-661221_1/1920-1200/luis-miguel-romance-luis-miguel-romance.jpg",
          source: "music/solotu.mp3",
          url: "https://www.youtube.com/watch?v=_wEsG3st3X8",
          favorited: false
        },
        {
          name: "Amarte Es Un Placer",
          artist: "Luis Miguel",
          cover: "https://f.fcdn.app/imgs/113d85/www.palaciodelamusica.com.uy/pmusuy/d8d5/original/catalogo/661221-661221_1/1920-1200/luis-miguel-romance-luis-miguel-romance.jpg",
          source: "music/placer.mp3",
          url: "https://www.youtube.com/watch?v=ssnZ5tIHw1Y",
          favorited: false
        },
        {
          name: "Hoy El Aire Huele a Ti",
          artist: "Luis Miguel",
          cover: "https://f.fcdn.app/imgs/113d85/www.palaciodelamusica.com.uy/pmusuy/d8d5/original/catalogo/661221-661221_1/1920-1200/luis-miguel-romance-luis-miguel-romance.jpg",
          source: "music/aire.mp3",
          url: "https://www.youtube.com/watch?v=WishMcoqP1s",
          favorited: false
        },
        {
          name: "La Gloria Eres Tu",
          artist: "Luis Miguel",
          cover: "https://f.fcdn.app/imgs/113d85/www.palaciodelamusica.com.uy/pmusuy/d8d5/original/catalogo/661221-661221_1/1920-1200/luis-miguel-romance-luis-miguel-romance.jpg",
          source: "music/gloria.mp3",
          url: "https://www.youtube.com/watch?v=h-GSyBwKuGE",
          favorited: false
        },
        {
          name: "Te Necesito",
          artist: "Luis Miguel",
          cover: "https://f.fcdn.app/imgs/113d85/www.palaciodelamusica.com.uy/pmusuy/d8d5/original/catalogo/661221-661221_1/1920-1200/luis-miguel-romance-luis-miguel-romance.jpg",
          source: "music/necesito.mp3",
          url: "https://www.youtube.com/watch?v=inPsqlXAhbI",
          favorited: false
        },
        {
          name: "A Kiss",
          artist: "The Driver Era",
          cover: "https://www.letrasboom.com/thumbs/artistas/img_1594141074.jpg",
          source: "music/kiss.mp3",
          url: "https://www.youtube.com/watch?v=tIl34Bg6yt0",
          favorited: false
        },
        {
          name: "Perfume de gardenias",
          artist: "Sonora Santanera",
          cover: "https://www.mexicoescultura.com/galerias/actividades/principal/sonorasantanera.png",
          source: "music/perfume.mp3",
          url: "https://www.youtube.com/watch?v=X-Xqqwa4o-E",
          favorited: false
        },
        {
          name: "Enamorado tuyo",
          artist: "Julieta Venegas",
          cover: "https://colectivosonoro.com/wp-content/uploads/2021/04/raro-cuarteto-de-nos.jpg",
          source: "music/tuyo.mp3",
          url: "https://www.youtube.com/watch?v=R5cbxTPZNL0",
          favorited: false
        },
        {
          name: "Eres para mi",
          artist: "Cuarteto de nos",
          cover: "https://i.discogs.com/IkhP6zgUpEFuRJEvWdsLg5Z8LFzCXn4uRDNln5JlGA4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NjU0/MDMtMTU4Njc3MjE2/NS02ODg4LmpwZWc.jpeg",
          source: "music/mia.mp3",
          url: "https://www.youtube.com/watch?v=pj2ntDiXJCk",
          favorited: false
        },
        {
          name: "Bonita",
          artist: "Los Choclok",
          cover: "https://photos.bandsintown.com/large/6750961.jpeg",
          source: "music/bonita.mp3",
          url: "https://www.youtube.com/watch?v=5pe178kh4lQ&t=9s",
          favorited: false
        },
        {
          name: "Locos",
          artist: "León Larregui",
          cover: "https://img.maspormas.com/2016/06/12968108_1747500372163032_7924439455210272134_o.jpg",
          source: "music/locos.mp3",
          url: "https://www.youtube.com/watch?v=SXcFYnHSG08",
          favorited: false
        },
        {
          name: "Contigo",
          artist: "Natalia Lafourcade",
          cover: "https://www.lahiguera.net/musicalia/artistas/natalia_lafourcade/disco/6582/tema/9664/natalia_lafourcade_mi_lugar_favorito-portada.jpg",
          source: "music/sinti.mp3",
          url: "https://www.youtube.com/watch?v=EQm1oHZ1diY",
          favorited: false
        },
        {
          name: "Tu geografia",
          artist: "Indios",
          cover: "https://i.ytimg.com/vi/rHRc-NPEe8k/maxresdefault.jpg",
          source: "music/geogra.mp3",
          url: "https://www.youtube.com/watch?v=gSCbndW7AFg",
          favorited: false
        },
        {
          name: "Happy Together",
          artist: "The Turtles",
          cover: "https://lastfm.freetls.fastly.net/i/u/300x300/0084a77952184cf9cc843341808abdd6.jpg",
          source: "music/happy.mp3",
          url: "https://www.youtube.com/watch?v=CDjEn_Rmcfc",
          favorited: false
        },
        {
          name: "Creep",
          artist: "Radiohead",
          cover: "https://i.pinimg.com/736x/b9/e8/7d/b9e87d96f765b5685b277ae98fdd2793.jpg",
          source: "music/die.mp3",
          url: "https://www.youtube.com/watch?v=tn_bj5YBq3Y",
          favorited: false
        },
        {
          name: "Die for you",
          artist: "Radiohead",
          cover: "https://http2.mlstatic.com/D_NQ_NP_702369-MPE43300635884_082020-O.jpg",
          source: "music/crip.mp3",
          url: "https://www.youtube.com/watch?v=QLCpqdqeoII",
          favorited: false
        },
        {
          name: "CLOSE TO YOU",
          artist: "CARPENTERS",
          cover: "https://ih1.redbubble.net/image.3001290676.6068/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
          source: "music/close.mp3",
          url: "https://www.youtube.com/watch?v=wB0bhtZ4NR8",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});