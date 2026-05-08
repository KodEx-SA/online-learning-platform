'use strict';

// ════════════════════════════════════════════════ DATA ════════════════════════════════════════════════
// Structured kana data — tables are generated from this, so no more 200+ static rows in HTML.
// Each entry: h=hiragana, k=katakana, r=canonical romaji, alts=accepted alternate spellings
const SECTIONS = [
    {
        id: 'basic-kana', title: 'Basic Kana', label: 'Basic',
        description: 'The foundation of Japanese writing. <strong>Hiragana</strong> (curved) is for native words; <strong>Katakana</strong> (angular) is for foreign loanwords. <em>Click any character to hear its pronunciation.</em>',
        rows: [
            { h: 'あ', k: 'ア', r: 'a', ex: 'ありがとう', exr: 'arigatou', exm: 'thank you' },
            { h: 'い', k: 'イ', r: 'i', ex: 'いぬ', exr: 'inu', exm: 'dog' },
            { h: 'う', k: 'ウ', r: 'u', ex: 'うみ', exr: 'umi', exm: 'sea' },
            { h: 'え', k: 'エ', r: 'e', ex: 'えき', exr: 'eki', exm: 'station' },
            { h: 'お', k: 'オ', r: 'o', ex: 'おちゃ', exr: 'ocha', exm: 'tea' },
            { h: 'か', k: 'カ', r: 'ka', ex: 'かさ', exr: 'kasa', exm: 'umbrella' },
            { h: 'き', k: 'キ', r: 'ki', ex: 'きりん', exr: 'kirin', exm: 'giraffe' },
            { h: 'く', k: 'ク', r: 'ku', ex: 'くるま', exr: 'kuruma', exm: 'car' },
            { h: 'け', k: 'ケ', r: 'ke', ex: 'けしゴム', exr: 'keshigomu', exm: 'eraser' },
            { h: 'こ', k: 'コ', r: 'ko', ex: 'こども', exr: 'kodomo', exm: 'child' },
            { h: 'さ', k: 'サ', r: 'sa', ex: 'さかな', exr: 'sakana', exm: 'fish' },
            { h: 'し', k: 'シ', r: 'shi', alts: ['si'], ex: 'しろ', exr: 'shiro', exm: 'white' },
            { h: 'す', k: 'ス', r: 'su', ex: 'すいか', exr: 'suika', exm: 'watermelon' },
            { h: 'せ', k: 'セ', r: 'se', ex: 'せんせい', exr: 'sensei', exm: 'teacher' },
            { h: 'そ', k: 'ソ', r: 'so', ex: 'そら', exr: 'sora', exm: 'sky' },
            { h: 'た', k: 'タ', r: 'ta', ex: 'たこ', exr: 'tako', exm: 'octopus' },
            { h: 'ち', k: 'チ', r: 'chi', alts: ['ti'], ex: 'ちず', exr: 'chizu', exm: 'map' },
            { h: 'つ', k: 'ツ', r: 'tsu', alts: ['tu'], ex: 'つき', exr: 'tsuki', exm: 'moon' },
            { h: 'て', k: 'テ', r: 'te', ex: 'てがみ', exr: 'tegami', exm: 'letter' },
            { h: 'と', k: 'ト', r: 'to', ex: 'とり', exr: 'tori', exm: 'bird' },
            { h: 'な', k: 'ナ', r: 'na', ex: 'なまえ', exr: 'namae', exm: 'name' },
            { h: 'に', k: 'ニ', r: 'ni', ex: 'にわ', exr: 'niwa', exm: 'garden' },
            { h: 'ぬ', k: 'ヌ', r: 'nu', ex: 'ぬの', exr: 'nuno', exm: 'cloth' },
            { h: 'ね', k: 'ネ', r: 'ne', ex: 'ねこ', exr: 'neko', exm: 'cat' },
            { h: 'の', k: 'ノ', r: 'no', ex: 'のり', exr: 'nori', exm: 'seaweed' },
            { h: 'は', k: 'ハ', r: 'ha', ex: 'はな', exr: 'hana', exm: 'flower' },
            { h: 'ひ', k: 'ヒ', r: 'hi', ex: 'ひと', exr: 'hito', exm: 'person' },
            { h: 'ふ', k: 'フ', r: 'fu', alts: ['hu'], ex: 'ふじさん', exr: 'fujisan', exm: 'Mt. Fuji' },
            { h: 'へ', k: 'ヘ', r: 'he', ex: 'へや', exr: 'heya', exm: 'room' },
            { h: 'ほ', k: 'ホ', r: 'ho', ex: 'ほし', exr: 'hoshi', exm: 'star' },
            { h: 'ま', k: 'マ', r: 'ma', ex: 'まち', exr: 'machi', exm: 'town' },
            { h: 'み', k: 'ミ', r: 'mi', ex: 'みず', exr: 'mizu', exm: 'water' },
            { h: 'む', k: 'ム', r: 'mu', ex: 'むし', exr: 'mushi', exm: 'insect' },
            { h: 'め', k: 'メ', r: 'me', ex: 'めがね', exr: 'megane', exm: 'glasses' },
            { h: 'も', k: 'モ', r: 'mo', ex: 'もり', exr: 'mori', exm: 'forest' },
            { h: 'や', k: 'ヤ', r: 'ya', ex: 'やま', exr: 'yama', exm: 'mountain' },
            { h: 'ゆ', k: 'ユ', r: 'yu', ex: 'ゆき', exr: 'yuki', exm: 'snow' },
            { h: 'よ', k: 'ヨ', r: 'yo', ex: 'よる', exr: 'yoru', exm: 'night' },
            { h: 'ら', k: 'ラ', r: 'ra', ex: 'らいねん', exr: 'rainen', exm: 'next year' },
            { h: 'り', k: 'リ', r: 'ri', ex: 'りんご', exr: 'ringo', exm: 'apple' },
            { h: 'る', k: 'ル', r: 'ru', ex: 'るすばん', exr: 'rusuban', exm: 'house-sitting' },
            { h: 'れ', k: 'レ', r: 're', ex: 'れいぞうこ', exr: 'reizouko', exm: 'refrigerator' },
            { h: 'ろ', k: 'ロ', r: 'ro', ex: 'ろうそく', exr: 'rousoku', exm: 'candle' },
            { h: 'わ', k: 'ワ', r: 'wa', ex: 'わたし', exr: 'watashi', exm: 'I / me' },
            { h: 'を', k: 'ヲ', r: 'wo', ex: '(object marker)', exr: '', exm: 'particle' },
            { h: 'ん', k: 'ン', r: 'n', alts: ['m'], ex: 'ほん', exr: 'hon', exm: 'book' },
        ]
    },
    {
        id: 'voiced-kana', title: 'Voiced & Semi-voiced Kana', label: 'Voiced',
        description: '<strong>Dakuten</strong> (゛) marks voiced consonants — か→が, さ→ざ, た→だ, は→ば. <strong>Handakuten</strong> (゜) marks semi-voiced p-sounds — は→ぱ.',
        rows: [
            { h: 'が', k: 'ガ', r: 'ga', ex: 'がっこう', exr: 'gakkou', exm: 'school' },
            { h: 'ぎ', k: 'ギ', r: 'gi', ex: 'ぎんこう', exr: 'ginkou', exm: 'bank' },
            { h: 'ぐ', k: 'グ', r: 'gu', ex: 'ぐあい', exr: 'guai', exm: 'condition' },
            { h: 'げ', k: 'ゲ', r: 'ge', ex: 'げんき', exr: 'genki', exm: 'healthy' },
            { h: 'ご', k: 'ゴ', r: 'go', ex: 'ごはん', exr: 'gohan', exm: 'rice / meal' },
            { h: 'ざ', k: 'ザ', r: 'za', ex: 'ざっし', exr: 'zasshi', exm: 'magazine' },
            { h: 'じ', k: 'ジ', r: 'ji', alts: ['zi'], ex: 'じかん', exr: 'jikan', exm: 'time' },
            { h: 'ず', k: 'ズ', r: 'zu', ex: 'ずっと', exr: 'zutto', exm: 'always' },
            { h: 'ぜ', k: 'ゼ', r: 'ze', ex: 'ぜんぶ', exr: 'zenbu', exm: 'everything' },
            { h: 'ぞ', k: 'ゾ', r: 'zo', ex: 'ぞう', exr: 'zou', exm: 'elephant' },
            { h: 'だ', k: 'ダ', r: 'da', ex: 'だいがく', exr: 'daigaku', exm: 'university' },
            { h: 'ぢ', k: 'ヂ', r: 'ji', alts: ['di', 'zi'], ex: '(archaic)', exr: '', exm: '' },
            { h: 'づ', k: 'ヅ', r: 'zu', alts: ['du'], ex: '(archaic)', exr: '', exm: '' },
            { h: 'で', k: 'デ', r: 'de', ex: 'でんしゃ', exr: 'densha', exm: 'train' },
            { h: 'ど', k: 'ド', r: 'do', ex: 'どうぞ', exr: 'douzo', exm: 'please / here you go' },
            { h: 'ば', k: 'バ', r: 'ba', ex: 'ばら', exr: 'bara', exm: 'rose' },
            { h: 'び', k: 'ビ', r: 'bi', ex: 'びょういん', exr: 'byouin', exm: 'hospital' },
            { h: 'ぶ', k: 'ブ', r: 'bu', ex: 'ぶた', exr: 'buta', exm: 'pig' },
            { h: 'べ', k: 'ベ', r: 'be', ex: 'べんきょう', exr: 'benkyou', exm: 'study' },
            { h: 'ぼ', k: 'ボ', r: 'bo', ex: 'ぼうし', exr: 'boushi', exm: 'hat' },
            { h: 'ぱ', k: 'パ', r: 'pa', ex: 'パン', exr: 'pan', exm: 'bread' },
            { h: 'ぴ', k: 'ピ', r: 'pi', ex: 'ピアノ', exr: 'piano', exm: 'piano' },
            { h: 'ぷ', k: 'プ', r: 'pu', ex: 'プール', exr: 'puuru', exm: 'pool' },
            { h: 'ぺ', k: 'ペ', r: 'pe', ex: 'ペン', exr: 'pen', exm: 'pen' },
            { h: 'ぽ', k: 'ポ', r: 'po', ex: 'ポスト', exr: 'posuto', exm: 'mailbox' },
        ]
    },
    {
        id: 'yoon', title: 'Yōon (Combination Sounds)', label: 'Yōon',
        description: 'Combination sounds formed by pairing an <em>i-column</em> kana with a small <strong>や</strong>, <strong>ゆ</strong>, or <strong>よ</strong>. The small kana reduces the two-syllable combination into one.',
        rows: [
            { h: 'きゃ', k: 'キャ', r: 'kya', ex: 'きゃく', exr: 'kyaku', exm: 'guest' },
            { h: 'きゅ', k: 'キュ', r: 'kyu', ex: 'きゅうり', exr: 'kyuuri', exm: 'cucumber' },
            { h: 'きょ', k: 'キョ', r: 'kyo', ex: 'きょう', exr: 'kyou', exm: 'today' },
            { h: 'しゃ', k: 'シャ', r: 'sha', alts: ['sya'], ex: 'しゃしん', exr: 'shashin', exm: 'photograph' },
            { h: 'しゅ', k: 'シュ', r: 'shu', alts: ['syu'], ex: 'しゅくだい', exr: 'shukudai', exm: 'homework' },
            { h: 'しょ', k: 'ショ', r: 'sho', alts: ['syo'], ex: 'しょうがっこう', exr: 'shougakkou', exm: 'elementary school' },
            { h: 'ちゃ', k: 'チャ', r: 'cha', alts: ['tya'], ex: 'ちゃわん', exr: 'chawan', exm: 'tea bowl' },
            { h: 'ちゅ', k: 'チュ', r: 'chu', alts: ['tyu'], ex: 'ちゅうごく', exr: 'chuugoku', exm: 'China' },
            { h: 'ちょ', k: 'チョ', r: 'cho', alts: ['tyo'], ex: 'ちょうちょ', exr: 'chouchou', exm: 'butterfly' },
            { h: 'にゃ', k: 'ニャ', r: 'nya', ex: 'にゃあ', exr: 'nyaa', exm: 'meow' },
            { h: 'にゅ', k: 'ニュ', r: 'nyu', ex: 'にゅうがく', exr: 'nyuugaku', exm: 'school enrollment' },
            { h: 'にょ', k: 'ニョ', r: 'nyo', ex: 'によう', exr: 'nyou', exm: 'urine' },
            { h: 'ひゃ', k: 'ヒャ', r: 'hya', ex: 'ひゃく', exr: 'hyaku', exm: 'hundred' },
            { h: 'ひゅ', k: 'ヒュ', r: 'hyu', ex: 'ひゅう', exr: 'hyuu', exm: 'whistling wind' },
            { h: 'ひょ', k: 'ヒョ', r: 'hyo', ex: 'ひょう', exr: 'hyou', exm: 'hail / chart' },
            { h: 'みゃ', k: 'ミャ', r: 'mya', ex: 'みゃく', exr: 'myaku', exm: 'pulse' },
            { h: 'みゅ', k: 'ミュ', r: 'myu', ex: 'ミュージック', exr: 'myuujikku', exm: 'music' },
            { h: 'みょ', k: 'ミョ', r: 'myo', ex: 'みょうじ', exr: 'myouji', exm: 'surname' },
            { h: 'りゃ', k: 'リャ', r: 'rya', ex: 'りゃくご', exr: 'ryakugo', exm: 'abbreviation' },
            { h: 'りゅ', k: 'リュ', r: 'ryu', ex: 'りゅう', exr: 'ryuu', exm: 'dragon' },
            { h: 'りょ', k: 'リョ', r: 'ryo', ex: 'りょこう', exr: 'ryokou', exm: 'travel' },
            { h: 'ぎゃ', k: 'ギャ', r: 'gya', ex: 'ぎゃく', exr: 'gyaku', exm: 'reverse' },
            { h: 'ぎゅ', k: 'ギュ', r: 'gyu', ex: 'ぎゅうにゅう', exr: 'gyuunyuu', exm: 'milk' },
            { h: 'ぎょ', k: 'ギョ', r: 'gyo', ex: 'ぎょかい', exr: 'gyokai', exm: 'fishing industry' },
            { h: 'じゃ', k: 'ジャ', r: 'ja', ex: 'じゃがいも', exr: 'jagaimo', exm: 'potato' },
            { h: 'じゅ', k: 'ジュ', r: 'ju', ex: 'じゅうどう', exr: 'juudou', exm: 'judo' },
            { h: 'じょ', k: 'ジョ', r: 'jo', ex: 'じょうず', exr: 'jouzu', exm: 'skillful' },
            { h: 'びゃ', k: 'ビャ', r: 'bya', ex: 'びゃくや', exr: 'byakuya', exm: 'white night' },
            { h: 'びゅ', k: 'ビュ', r: 'byu', ex: 'ビュー', exr: 'byuu', exm: 'view' },
            { h: 'びょ', k: 'ビョ', r: 'byo', ex: 'びょういん', exr: 'byouin', exm: 'hospital' },
            { h: 'ぴゃ', k: 'ピャ', r: 'pya', ex: 'ぴゃっと', exr: 'pyatto', exm: 'quickly' },
            { h: 'ぴゅ', k: 'ピュ', r: 'pyu', ex: 'ピュア', exr: 'pyua', exm: 'pure' },
            { h: 'ぴょ', k: 'ピョ', r: 'pyo', ex: 'ぴょん', exr: 'pyon', exm: 'hop' },
        ]
    },
    {
        id: 'small-kana', title: 'Small & Special Kana', label: 'Special',
        description: 'Small <strong>っ</strong> doubles the following consonant (gemination). <strong>ゐ</strong> and <strong>ゑ</strong> are historical kana that are no longer used in modern Japanese.',
        rows: [
            { h: 'っ', k: 'ッ', r: '(double)', ex: 'きって', exr: 'kitte', exm: 'stamp' },
            { h: 'ゐ', k: 'ヰ', r: 'wi', ex: '(historical)', exr: '', exm: 'obsolete' },
            { h: 'ゑ', k: 'ヱ', r: 'we', ex: '(historical)', exr: '', exm: 'obsolete' },
        ]
    }
];

// Flat list used for quiz pooling
const ALL_KANA = SECTIONS.flatMap(s => s.rows.map(r => ({ ...r, sectionId: s.id })));

// ════════════════════════════════════════════════ STATE ════════════════════════════════════════════════
let quizMode = 'hiragana'; // 'hiragana' | 'katakana'
let quizStyle = 'type';     // 'type' | 'choice'
let currentKana = null;
let currentChoices = [];
let choiceAnswered = false;
let myChart = null;
const session = { correct: 0, wrong: 0, streak: 0 };

// ════════════════════════════════════════════════ STORAGE ════════════════════════════════════════════════
function getProgress() {
    try { return JSON.parse(localStorage.getItem('kanaProgress') || '{}'); }
    catch { return {}; }
}

// Called from generated checkbox onchange — uses data-kana, not inline regex (bug fix)
function saveProgress(kana, checked) {
    const p = getProgress();
    if (!p[kana]) p[kana] = { correct: 0, wrong: 0, checked: false };
    p[kana].checked = checked;
    localStorage.setItem('kanaProgress', JSON.stringify(p));
    updateProgressChart();
    updateProgressStats();
}

function recordResult(kana, correct) {
    const p = getProgress();
    if (!p[kana]) p[kana] = { correct: 0, wrong: 0, checked: false };
    correct ? p[kana].correct++ : p[kana].wrong++;
    localStorage.setItem('kanaProgress', JSON.stringify(p));
}

// ════════════════════════════════════════════════ TABLE BUILDER ════════════════════════════════════════════════
// Tables are generated here — eliminates 200+ static HTML rows and the regex-based loadProgress bug
function buildTables() {
    const container = document.getElementById('kana-tables');
    container.innerHTML = SECTIONS.map(section => `
    <section id="${section.id}" class="kana-section">
      <div class="section-header">
        <h2 class="section-title">${section.title}</h2>
        <span class="section-badge">${section.label}</span>
      </div>
      <details class="explainer" style="margin-bottom:14px">
        <summary>About ${section.title}</summary>
        <p>${section.description}</p>
      </details>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th title="Mark as learned">✓</th>
              <th>Hiragana</th>
              <th>Romaji</th>
              <th>Katakana</th>
              <th>Romaji</th>
              <th>Example Word</th>
            </tr>
          </thead>
          <tbody>
            ${section.rows.map(row => `
              <tr data-h="${row.h}" data-k="${row.k}" data-r="${row.r}">
                <td>
                  <input type="checkbox" class="progress-check"
                    data-kana="${row.h}"
                    onchange="saveProgress('${row.h}', this.checked)"
                    title="Mark as learned">
                </td>
                <td class="kana-cell" onclick="speak('${row.h}')" title="Click to hear hiragana">${row.h}</td>
                <td>${row.r}</td>
                <td class="kana-cell" onclick="speak('${row.k}')" title="Click to hear katakana">${row.k}</td>
                <td>${row.r}</td>
                <td class="example-cell">
                  <span class="ex-word">${row.ex}</span>
                  ${row.exr ? `<span class="ex-romaji">${row.exr}</span>` : ''}
                  ${row.exm ? `<span class="ex-meaning">${row.exm}</span>` : ''}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `).join('');

    loadCheckboxes();
}

function loadCheckboxes() {
    const progress = getProgress();
    // Uses data-kana attribute — no more regex on inline onchange strings (bug fix)
    document.querySelectorAll('.progress-check').forEach(cb => {
        const kana = cb.dataset.kana;
        cb.checked = !!(progress[kana] && progress[kana].checked);
    });
}

// ════════════════════════════════════════════════ SPEECH ════════════════════════════════════════════════
// Includes error handling for missing Japanese TTS voice (bug fix)
function speak(text) {
    const statusEl = document.getElementById('speech-status');
    if (!('speechSynthesis' in window)) {
        statusEl.textContent = '⚠ Speech synthesis is not supported in this browser.';
        return;
    }
    speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'ja-JP';
    utt.onerror = () => {
        statusEl.textContent = '⚠ Japanese voice unavailable. Install a Japanese TTS voice in your OS settings.';
    };
    utt.onstart = () => { statusEl.textContent = ''; };
    speechSynthesis.speak(utt);
}

function speakCurrent() {
    if (currentKana) speak(quizMode === 'hiragana' ? currentKana.h : currentKana.k);
}

// ════════════════════════════════════════════════ QUIZ ════════════════════════════════════════════════
function getQuizPool() {
    const cat = document.getElementById('quiz-category').value;
    const quizzable = ALL_KANA.filter(k => k.r !== '(double)' && k.r !== 'wi' && k.r !== 'we' || cat !== 'all');
    return cat === 'all' ? quizzable : quizzable.filter(k => k.sectionId === cat);
}

// Weighted random: kana answered incorrectly more often get picked more often
function pickWeighted(pool) {
    if (!pool.length) return null;
    const progress = getProgress();
    const weights = pool.map(item => {
        const p = progress[item.h] || { correct: 0, wrong: 0 };
        const total = p.correct + p.wrong;
        if (total === 0) return 1.5; // slight boost for unseen kana
        const accuracy = p.correct / total;
        return 1 + (1 - accuracy) * 3; // range: 1–4
    });
    const totalW = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalW;
    for (let i = 0; i < pool.length; i++) {
        rand -= weights[i];
        if (rand <= 0) return pool[i];
    }
    return pool[pool.length - 1];
}

function nextKana() {
    clearFeedback();
    const pool = getQuizPool();
    if (!pool.length) return;

    // Avoid immediate repeat
    let picked = pickWeighted(pool);
    if (pool.length > 1 && currentKana && picked.h === currentKana.h) {
        picked = pickWeighted(pool.filter(k => k.h !== currentKana.h));
    }
    currentKana = picked;
    choiceAnswered = false;

    const char = quizMode === 'hiragana' ? currentKana.h : currentKana.k;
    const display = document.getElementById('kana-display');
    display.style.transform = 'scale(0.85)';
    display.textContent = char;
    setTimeout(() => { display.style.transform = 'scale(1)'; }, 10);

    document.getElementById('user-input').value = '';
    if (quizStyle === 'choice') buildChoices(pool);
    if (quizStyle === 'type') document.getElementById('user-input').focus();
}

function buildChoices(pool) {
    // 3 wrong options + 1 correct, shuffled
    const wrong = pool.filter(k => k.r !== currentKana.r).sort(() => Math.random() - 0.5).slice(0, 3);
    currentChoices = [...wrong, currentKana].sort(() => Math.random() - 0.5);
    document.getElementById('choices-grid').innerHTML = currentChoices.map((kana, i) => `
    <button class="choice-btn" id="choice-${i}" onclick="checkChoice(${i})">${kana.r}</button>
  `).join('');
}

function checkChoice(idx) {
    if (choiceAnswered) return;
    choiceAnswered = true;
    const chosen = currentChoices[idx];
    const correct = chosen.r === currentKana.r;

    currentChoices.forEach((k, i) => {
        const btn = document.getElementById(`choice-${i}`);
        btn.disabled = true;
        if (k.r === currentKana.r) btn.classList.add('correct');
        else if (i === idx && !correct) btn.classList.add('wrong');
    });

    handleResult(correct);
    setTimeout(nextKana, correct ? 900 : 1700);
}

function checkAnswer() {
    if (!currentKana || quizStyle !== 'type') return;
    const val = document.getElementById('user-input').value.toLowerCase().trim();
    if (!val) return;
    const accepted = [currentKana.r, ...(currentKana.alts || [])];
    handleResult(accepted.includes(val));
    document.getElementById('user-input').value = '';
}

function handleResult(correct) {
    recordResult(currentKana.h, correct);

    if (correct) {
        session.correct++; session.streak++;
        showFeedback('✓ Correct!', 'correct');
    } else {
        session.wrong++; session.streak = 0;
        const accepted = [currentKana.r, ...(currentKana.alts || [])];
        showFeedback(`✗ Answer: ${accepted.join(' or ')}`, 'wrong');
    }

    document.getElementById('score-correct').textContent = session.correct;
    document.getElementById('score-wrong').textContent = session.wrong;
    document.getElementById('score-streak').textContent = session.streak;

    updateProgressChart();
    updateProgressStats();
}

function showFeedback(msg, cls) {
    const el = document.getElementById('feedback');
    el.textContent = msg;
    el.className = cls;
}
function clearFeedback() {
    const el = document.getElementById('feedback');
    el.textContent = '';
    el.className = '';
}

// Quiz mode controls
function setQuizMode(mode, btn) {
    quizMode = mode;
    document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('quiz-hint').textContent =
        mode === 'katakana'
            ? 'Katakana mode — click to hear · Type the romaji below'
            : 'Click the character to hear it · Type the romaji below';
    nextKana();
}

function setQuizStyle(style, btn) {
    quizStyle = style;
    document.querySelectorAll('[data-style]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('type-mode').classList.toggle('hidden', style !== 'type');
    document.getElementById('choice-mode').classList.toggle('hidden', style !== 'choice');
    nextKana();
}

// ════════════════════════════════════════════════ PROGRESS CHART ════════════════════════════════════════════════
function updateProgressStats() {
    const p = getProgress();
    const totalKana = ALL_KANA.length;
    const checked = Object.values(p).filter(v => v.checked).length;
    const totalRight = Object.values(p).reduce((s, v) => s + (v.correct || 0), 0);
    const totalTried = Object.values(p).reduce((s, v) => s + (v.correct || 0) + (v.wrong || 0), 0);
    const accuracy = totalTried > 0 ? Math.round((totalRight / totalTried) * 100) : 0;

    document.getElementById('progress-stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-number" style="color:var(--primary)">${checked}</div>
      <div class="stat-label">Marked Learned</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color:var(--text-muted)">${totalKana}</div>
      <div class="stat-label">Total Kana</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color:var(--correct)">${totalRight}</div>
      <div class="stat-label">Correct Answers</div>
    </div>
    <div class="stat-card">
      <div class="stat-number" style="color:${accuracy >= 70 ? 'var(--correct)' : accuracy >= 40 ? 'var(--primary)' : 'var(--accent)'}">${accuracy}%</div>
      <div class="stat-label">Quiz Accuracy</div>
    </div>
  `;
}

function updateProgressChart() {
    const canvas = document.getElementById('myChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const progress = getProgress();
    const isDark = document.documentElement.classList.contains('dark');
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
    const labelColor = isDark ? '#848d97' : '#78716c';

    const cats = SECTIONS.map(s => ({
        label: s.label,
        pct: s.rows.length
            ? Math.round(s.rows.filter(r => progress[r.h] && progress[r.h].checked).length / s.rows.length * 100)
            : 0
    }));

    if (myChart) myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cats.map(c => c.label),
            datasets: [{
                data: cats.map(c => c.pct),
                backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
                borderColor: ['#4f46e5', '#7c3aed', '#9333ea', '#db2777'],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true, max: 100,
                    grid: { color: gridColor },
                    ticks: { color: labelColor, callback: v => v + '%' },
                    title: { display: true, text: '% Marked as Learned', color: labelColor }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: labelColor },
                    title: { display: true, text: 'Kana Categories', color: labelColor }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y}% learned` } }
            }
        }
    });
}

// ════════════════════════════════════════════════ SEARCH ════════════════════════════════════════════════
document.getElementById('search').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('#kana-tables tbody tr').forEach(row => {
        if (!q) {
            row.style.display = '';
            row.classList.remove('search-match');
            return;
        }
        const text = (row.dataset.h + row.dataset.k + row.dataset.r + row.textContent).toLowerCase();
        const match = text.includes(q);
        row.style.display = match ? '' : 'none';
        row.classList.toggle('search-match', match);
    });
});

// ════════════════════════════════════════════════ DARK MODE ════════════════════════════════════════════════
// Fully functional — was commented-out button in the original
function toggleDarkMode() {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', dark);
    document.getElementById('dark-icon').textContent = dark ? '☀️' : '🌙';
    setTimeout(updateProgressChart, 50); // redraw chart with correct colours
}

// ════════════════════════════════════════════════ MOBILE MENU ════════════════════════════════════════════════
function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('open'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

// ════════════════════════════════════════════════ RESET ════════════════════════════════════════════════
function confirmReset() {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    localStorage.removeItem('kanaProgress');
    loadCheckboxes();
    updateProgressChart();
    updateProgressStats();
    Object.assign(session, { correct: 0, wrong: 0, streak: 0 });
    ['score-correct', 'score-wrong', 'score-streak'].forEach(id => document.getElementById(id).textContent = '0');
}

// ════════════════════════════════════════════════ KEY BINDINGS ════════════════════════════════════════════════
document.getElementById('user-input').addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    checkAnswer();
    // Short delay so user can read feedback before advancing
    setTimeout(nextKana, 700);
});

// ════════════════════════════════════════════════ INIT ════════════════════════════════════════════════
window.addEventListener('load', () => {
    // Restore dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        document.getElementById('dark-icon').textContent = '☀️';
    }
    buildTables(); // generate tables from data
    updateProgressStats();
    updateProgressChart();
    nextKana();
});