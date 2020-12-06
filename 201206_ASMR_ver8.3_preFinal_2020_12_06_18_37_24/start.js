//images JHL FINAL
var bkImage;
var q1Image, q15Image, q15Imagewl, q2Image, q3Image, q4Image, q6Image, q7Imaged, q7ImageS1, q7ImageS2, q7ImageS3, q8Imaged, q8Imagewl, q9Image, q10Image, q11Image, q12Image;
let image_ENFP, image_ENTP, image_ESFJ, image_INFP, image_ENFJ, image_ENTJ, image_INTP, image_ISTP, image_ESFP, image_INFJ, image_INTJ, image_ISFP, image_ESTJ, image_ESTP, image_ISFJ, image_ISTJ;
//data
let questions = [];
let types;
//variables
let scoreMBTI = [];
let MBTI;
let timer;
//fonts
//let uhbee;
let uhbeeBold;
let uhbeese;
let nanum;
let noto;
//audio
let audio_CAFE, audio_CLASSIC, audio_EDM, audio_COUNTRY;
let audio_crash, audio_book, audio_vibration, audio_faucet, audio_door, audio_blanket3, audio_wack, audio_squeak, audio_switch, audio_book2, audio_blanket1, audio_blanket2, audio_foot, audio_snore, audio_window1;
let cur;

function preload() {
  bkImage = loadImage("img/main-page(opacity20).jpg");
//  uhbee = loadFont("assets/UhBeeYiseul.ttf")
  uhbeeBold = loadFont("assets/UhBeeYiseulBold.ttf")
  uhbeese = loadFont("assets/UhBee Se_hyun.ttf")
  nanum = loadFont("assets/NanumPen.ttf")
  noto = loadFont("assets/NotoSansKR-Medium.otf")
  audio_CAFE = loadSound('audio/cafebgm.mp3');
  audio_EDM = loadSound('audio/The_Nexus_Riddim_-_Konrad_OldMoney.mp3');
  audio_CLASSIC = loadSound('audio/Midsummer Sky - Kevin MacLeod.mp3');
  audio_COUNTRY = loadSound('audio/Alyssa - The Mini Vandals.mp3');
  //resultImages
  image_ENFP = loadImage('img/result1_ENFP.jpg');
  image_ENTP = loadImage('img/result1_ENTP.jpg');
  image_ESFJ = loadImage('img/result1_ESFJ.jpg');
  image_INFP = loadImage('img/result1_INFP.jpg');
  image_ENFJ = loadImage('img/result2_ENFJ.jpg');
  image_ENTJ = loadImage('img/result2_ENTJ.jpg');
  image_INTP = loadImage('img/result2_INTP.jpg');
  image_ISTP = loadImage('img/result2_ISTP.jpg');
  image_ESFP = loadImage('img/result3_ESFP.jpg');
  image_INFJ = loadImage('img/result3_INFJ.jpg');
  image_INTJ = loadImage('img/result3_INTJ.jpg');
  image_ISFP = loadImage('img/result3_ISFP.jpg');
  image_ESTJ = loadImage('img/result4_ESTJ.jpg');
  image_ESTP = loadImage('img/result4_ESTP.jpg');
  image_ISFJ = loadImage('img/result4_ISFJ.jpg');
  image_ISTJ = loadImage('img/result4_ISTJ.jpg');
  
  //jw_add
  q1Image = loadImage("img/q1(opacity30).png");
  q15Image = loadImage("img/q1-2.jpg");
  q15Imagewl = loadImage("img/q1-2_lighton.jpg");
  q2Image = loadImage("img/q2(opacity30).jpg");
  q3Image = loadImage("img/q3(opacity30).jpg");
  q3ImageA = loadImage("img/q3base.jpg");
  q3ImageB = loadImage("img/q3animated.png");
  q3ImageC = loadImage("img/q3dotline.png")
  q3ImageD = loadImage("img/q3lampon.png")
  q4Image = loadImage("img/q4(opacity30).jpg");
  q6Image = loadImage("img/q6(opacity30).jpg");
  q7Imaged = loadImage("img/q7_dark.jpg");
  q7ImageS1 = loadImage("img/q7_lessdark_switch1.jpg");
  q7ImageS2 = loadImage("img/q7_lessdark_switch2.jpg");
  q7ImageS3 = loadImage("img/q7_lessdark_switch3.jpg");
  q8Imaged = loadImage("img/q8_dark.jpg");
  q8Imagewl = loadImage("img/q8_withlight.jpg");
  //js add
  q9Image = loadImage("img/q9_dark.jpg");
  q9Imageb1 = loadImage("img/q9_book1.jpg");
  q9Imageb2 = loadImage("img/q9_book2.jpg");
  q10Image = loadImage("img/q10(opacity30).jpg");
  q10ImageB = loadImage("img/q10dim.jpg");
  q10ImageC = loadImage("img/q10line.png");
  q11Image = loadImage("img/q11_light.jpg");
  q12Image = loadImage("img/q12_new.jpg");
  //audio_jw
  audio_crash = loadSound("audio/crash_sound.mp3")
  audio_book = loadSound("audio/book.mp3");
  audio_window = loadSound("audio/windowopeningsound.mp3");
  audio_wind = loadSound("audio/windsound2.mp3");
  audio_vibration = loadSound("audio/cellphone1.mp3"); //q8
  audio_faucet = loadSound("audio/LeakyFaucet.mp3"); //q2
  audio_door = loadSound("audio/door2.wav"); //q2
  audio_blanket3 = loadSound("audio/blanket.wav");
  audio_wack = loadSound("audio/wack.wav");
  audio_squeak = loadSound("audio/squeak.wav");
  audio_switch = loadSound("audio/Switch3.mp3");
  //js add
   audio_book2 = loadSound("audio/book2.mp3");
  audio_blanket1 = loadSound("audio/blanket.mp3");
  audio_blanket2 = loadSound("audio/blanket2.mp3");
  audio_foot = loadSound("audio/foot.mp3");
  audio_snore = loadSound("audio/snore.mp3");
  audio_window1 = loadSound("audio/window.wav");

}

function setup() {

  scoreMBTI = [0, 0, 0, 0];
  questions = [{
      question: "집에 들어와서\n가장 먼저 트는 음악은?",
      options: ["감성충만 컨트리 음악", "잔잔한 선율의 클래식", "텐션업! 둠칫둠칫 신나는 EDM!", "밤에 취한다... 차분 감성 BGM!"],
      category: 1,
      point: [20, 20, -20, -20]
    },
    {
      question: "세수하고 거울을 보며 드는 생각은?", 
      options: ["오늘도 이렇게 금방 흘러가네", "세수 잘 됐다. 시원해", "내일은 또 어떻게 보내나...", "오늘 실수가 아쉬워서 계속 생각나네..."],
      category: 2,
      point: [-20, -20, 20, 20]
    },
    {
      question: "역시나 잠이 안 오네. 창 밖을 봤는데 보이는 건?",
      options: ["높은 빌딩들의 창문들이 밝히는 야경", "조용한 공원의 고즈넉한 풍경", "술마시며 왁자지껄 대화하는 사람들", "아무것도 없는 어두컴컴한 하늘"],
      category: 0,
      point: [10, -10, 10, -10]
    },
    {
      question: "이불을 덮고 다시 잠을 청해야겠어. 그런데?",
      options: ["그래, 사람이 잠을 자야지. 잠이 안 와도 눈은 감고 있자!", "몸은 피곤한데 잠은 안 오네...", "어차피 잠에 안 들텐데… 배고프다…", "내일 일어나서 과제해야 하는데, 빨리 자야 해!"],
      category: 3,
      point: [10, 10, -10, -10]
    }, 
    { //q5
      question: "오늘 하루를 되돌아보는데,\n 머릿속에 계속 짜증났던 일이 떠오르네.\n\n 그 일은,",
      options: ["동기가 3년만에 연락해서\n 소개팅해달라고 한 일", "친한 동기가\n 팀플 프리라이딩한 일"],
      category: 2,
      point: [-20, 20]
    },
    { //q6, 가중치*
      question: "생각해보니 내일은 공강이네. 무엇을 해야 행복할까?",
      options: ["친구들과 만나 홈파티", "이불 속에서 넷플릭스"],
      category: 0,
      point: [20, -20]
    },
    { //q7
      question: "불이 안 들어오네?\n무슨 일이지?",
      options: ["무서워!\n 사고가 난 거면 어떡하지?", "정전됐나봐!\n 관리실에 전화할까?"],
      category: 1,
      point: [-20, 20]
    },
    { //q8
      question: "아무래도 방금 그 소리 때문에 잠이 다 깼어.\n 핸드폰이나 봐야지. 무슨 앱에 들어갈까?",
      options: ["SNS 정주행 해야지.\n 그리고 내일 할 일도\n 짧게 기록해야겠어.", "유튜브에서\n 좋아하는 영상을\n 검색해서 볼래."],
      category: 3,
      point: [20, -20]
    },
    { //q9
      question: "휴, 그래도 잠이 안 오네.\n 책을 보면 잠이 좀 오려나? 무슨 책을 봐볼까?",
      options: ["마음을 뭉클하게 하는 감동 에세이", "몰입감 최고인 웅장한 판타지 소설"],
      category: 2,
      point: [10, -10, 10, -10]
    },
    { //q10
      question: "맞네! 보고 싶은데 어떻게 할까?",
      options: ["창문을 닫고 커튼도 내릴래. 내일 눈 쌓인 모습을 충분히 볼 수 있을 거야.", "창문만 닫고 커튼은 올릴래. 눈 내리는 정경을 보고 싶어.", "창문을 열고 커튼도 올릴래. 차가운 겨울바람까지 느껴보고 싶어.", "창문을 열고 손을 뻗어볼래. 눈송이가 닿으면 좋겠다."],
      category: 3,
      point: [10, 10, -10, -10]
    },
    { //q11
      question: "이제 좀 잠이 오는 거 같다. 흐아암... 오늘은 무슨 꿈을 꾸려나...",
      options: ["하루종일 생각했던 최애가 등장!", "위험하지만 재미있는 모험을 하는 중!"],
      category: 1,
      point: [10, -10]
    },
    {
      question: "잠을 잊은 너에게 주는 선물이야.\n너에게 딱 맞는 소리를 들어보렴!",
      options: ["열어볼까?"],
      category: 1,
      point: [0]

    }

  ];
  types = {
    ESTP: {
      description: "밤중에 가족 몰래 아그작와그작 꺼내먹는\n 바삭한 후라이드 치킨 소리야!",
      image: image_ESTP,
      audio: "",
      link: "https://youtu.be/nCPixGRK3vI"
    },
    ESFP: {
      description: "들썩들썩 시끌벅적한 해외 카페 속\n어렴풋이 흘러가는 달콤한 음악소리야!",
      image: image_ESFP,
      audio: "",
      link: "https://youtu.be/yyZxsDMcLVo"
    },
    ENFP: {
      description: "푸슝푸슝 어디로 튈지 모르는 전개에 놀라 \n빵 터져 숨죽이다 깔깔대는 웃음 소리야!",
      image: image_ENFP,
      audio: "",
      link: "https://youtu.be/ImXhbFPCO1c"
    },
    ENTP: {
      description: "SF에서 튀어나온 로봇이 치열하게 수리받는 \n삐그덕빼그덕 위잉위잉 소리야!",
      image: image_ENTP,
      audio: "",
      link: "https://youtu.be/F2wEf_alQzw"
    },
    ESTJ: {
      description: "팡팡파라파라팡팡팡 분수 솟는\n 장엄한 럭셔리 호텔 스파 물소리야!",
      image: image_ESTJ,
      audio: "",
      link: "https://youtu.be/Om3JthouC7c"
    },
    ESFJ: {
      description: "점심먹고 나른해진 교실에 선생님 몰래 \n속닥속닥 주고받는 친구와의 대화 소리야!",
      image: image_ESFJ,
      audio: "",
      link: "https://youtu.be/9SxfjThxslU"
    },
    ENFJ: {
      description: "매초마다 팅팅탱탱 팅글이 분사되는 \n프로 ASMR 아티스트의 영업 상황극 말소리야!",
      image: image_ENFJ,
      audio: "",
      link: "https://youtu.be/Bx3P43SzNOA"
    },
    ENTJ: {
      description: " '나를 따르라!' 뚜벅뚜벅 힘차게 워킹하는 \n카리스마 등산 베테랑의 위풍당당 발걸음 소리야!",
      image: image_ENTJ,
      audio: "",
      link: "https://youtu.be/DT3tz6cTj_Y"
    },
    ISTJ: {
      description: " 안 쓰던 물건들을 차곡차곡 책장에 정리하며 \n듣는 사부작사부작 소리야!",
      image: image_ISTJ,
      audio: "",
      link: "https://www.youtube.com/watch?v=dEUNgw0adZ0"
    },
    ISFJ: {
      description: " 모험을 떠나려 숲을 헤매다 하룻밤을 묵어가며 \n몸과 마음을 위로하는 장작불의 타닥타닥 소리야!",
      image: image_ISFJ,
      audio: "",
      link: "https://www.youtube.com/watch?v=KtavnzpFOFY"
    },
    INFJ: {
      description: "황궁으로 가는 마차 안에서 \n지나치는 풍경을 구경하며 멀리서 들려오는 \n짹짹짹 새소리와 졸졸졸 흐르는 물소리야!",
      image: image_INFJ,
      audio: "",
      link: "https://www.youtube.com/watch?v=6ccmmB72mxU"
    },
    INTJ: {
      description: "실험실에서 골똘히 다음 실험을 생각하며 듣는 \n초록 형광색 플라스크의 \n 퐁퐁퐁 솟아오르는 기포 소리야!",
      image: image_INTJ,
      audio: "",
      link: "https://www.youtube.com/watch?v=GJJpCmW0FCs&t=324s"
    },
    ISTP: {
      description: "시험을 앞두고 새벽의 도서관에서 \n꼼꼼하게 공부하며 듣는 사각사각 연필 소리야!",
      image: image_ISTP,
      audio: "",
      link: "https://www.youtube.com/watch?v=m-RAlseREy4"
    },
    ISFP: {
      description: "오색 빛의 모래를 한 줌 집었다가 흩날리자 \n귀를 간지럽히는 사르륵사르륵 소리야!",
      image: image_ISFP,
      audio: "",
      link: "https://www.youtube.com/watch?v=vbs2qpDJRVE"
    },
    INFP: {
      description: "비오는 날 물기어린 창가를 두들기는 \n투둑투둑 물방울 소리야!",
      image: image_INFP,
      audio: "",
      link: "https://www.youtube.com/watch?v=XzBfJb7nh9Q"
    },
    INTP: {
      description: "초승달이 비추는 낭만적인 밤길에서 \n시를 쓰며 듣는 낙엽의 바스락바스락 소리야!",
      image: image_INTP,
      audio: "",
      link: "https://www.youtube.com/watch?v=Xc7bMY730Jo"
    }
  };

  //   function draw(){
  //      cur = new Cursor();
  //  cur.display();
  //  if (mouseIsPressed){
  //    cur.shine();

  //  }
  //   }

  var mgr = new SceneManager();
  mgr.bkImage = bkImage; // inject bkImage property
  mgr.q1Image = q1Image;
  mgr.q15Image = q15Image;
  mgr.q15Imagewl = q15Imagewl;
  mgr.q2Image = q2Image;
  mgr.q3Image = q3Image;
  mgr.q3ImageA = q3ImageA;
  mgr.q3ImageB = q3ImageB;
  mgr.q3ImageC = q3ImageC;
  mgr.q3ImageD = q3ImageD;
  mgr.q4Image = q4Image;
  mgr.q6Image = q6Image;
  mgr.q7Imaged = q7Imaged;
  mgr.q7ImageS1 = q7ImageS1;
  mgr.q7ImageS2 = q7ImageS2;
  mgr.q7ImageS3 = q7ImageS3;
  mgr.q8Imaged = q8Imaged;
  mgr.q8Imagewl = q8Imagewl;
  mgr.q9Image = q9Image;
  mgr.q9Imageb1 = q9Imageb1;
  mgr.q9Imageb2 = q9Imageb2;
  mgr.q10Image = q10Image;
  mgr.q10ImageB = q10ImageB;
  mgr.q10ImageC = q10ImageC;
  mgr.q11Image = q11Image;
  mgr.q12Image = q12Image;
  mgr.questions = questions;
  mgr.types = types;
  mgr.timer = timer;
  //mgr. 다 쓰기

  mgr.wire();
  mgr.addScene(Intro);
  mgr.addScene(Stage0);
  mgr.addScene(Stage1);
  mgr.addScene(Stage2);
  mgr.addScene(Stage3);
  mgr.addScene(Stage4);
  mgr.addScene(Stage5);
  mgr.addScene(Stage6);
  mgr.addScene(Stage7);
  mgr.addScene(Stage8);
  mgr.addScene(Stage9);
  mgr.addScene(Stage10);
  mgr.addScene(Stage11);
  mgr.addScene(Result);
  mgr.addScene(ResultScene);
  mgr.showNextScene();
}