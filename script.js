const kanaData = [
    { hiragana: 'あ', romaji: 'a' }, { hiragana: 'い', romaji: 'i' }, { hiragana: 'う', romaji: 'u' }, { hiragana: 'え', romaji: 'e' }, { hiragana: 'お', romaji: 'o' },
    { hiragana: 'か', romaji: 'ka' }, { hiragana: 'き', romaji: 'ki' }, { hiragana: 'く', romaji: 'ku' }, { hiragana: 'け', romaji: 'ke' }, { hiragana: 'こ', romaji: 'ko' },
    { hiragana: 'さ', romaji: 'sa' }, { hiragana: 'し', romaji: 'shi' }, { hiragana: 'す', romaji: 'su' }, { hiragana: 'せ', romaji: 'se' }, { hiragana: 'そ', romaji: 'so' },
    { hiragana: 'た', romaji: 'ta' }, { hiragana: 'ち', romaji: 'chi' }, { hiragana: 'つ', romaji: 'tsu' }, { hiragana: 'て', romaji: 'te' }, { hiragana: 'と', romaji: 'to' },
    { hiragana: 'な', romaji: 'na' }, { hiragana: 'に', romaji: 'ni' }, { hiragana: 'ぬ', romaji: 'nu' }, { hiragana: 'ね', romaji: 'ne' }, { hiragana: 'の', romaji: 'no' },
    { hiragana: 'は', romaji: 'ha' }, { hiragana: 'ひ', romaji: 'hi' }, { hiragana: 'ふ', romaji: 'fu' }, { hiragana: 'へ', romaji: 'he' }, { hiragana: 'ほ', romaji: 'ho' },
    { hiragana: 'ま', romaji: 'ma' }, { hiragana: 'み', romaji: 'mi' }, { hiragana: 'む', romaji: 'mu' }, { hiragana: 'め', romaji: 'me' }, { hiragana: 'も', romaji: 'mo' },
    { hiragana: 'や', romaji: 'ya' }, { hiragana: 'ゆ', romaji: 'yu' }, { hiragana: 'よ', romaji: 'yo' },
    { hiragana: 'ら', romaji: 'ra' }, { hiragana: 'り', romaji: 'ri' }, { hiragana: 'る', romaji: 'ru' }, { hiragana: 'れ', romaji: 're' }, { hiragana: 'ろ', romaji: 'ro' },
    { hiragana: 'わ', romaji: 'wa' }, { hiragana: 'を', romaji: 'wo' }, { hiragana: 'ん', romaji: 'n' },
    { hiragana: 'が', romaji: 'ga' }, { hiragana: 'ぎ', romaji: 'gi' }, { hiragana: 'ぐ', romaji: 'gu' }, { hiragana: 'げ', romaji: 'ge' }, { hiragana: 'ご', romaji: 'go' },
    { hiragana: 'ざ', romaji: 'za' }, { hiragana: 'じ', romaji: 'ji' }, { hiragana: 'ず', romaji: 'zu' }, { hiragana: 'ぜ', romaji: 'ze' }, { hiragana: 'ぞ', romaji: 'zo' },
    { hiragana: 'だ', romaji: 'da' }, { hiragana: 'ぢ', romaji: 'ji' }, { hiragana: 'づ', romaji: 'zu' }, { hiragana: 'で', romaji: 'de' }, { hiragana: 'ど', romaji: 'do' },
    { hiragana: 'ば', romaji: 'ba' }, { hiragana: 'び', romaji: 'bi' }, { hiragana: 'ぶ', romaji: 'bu' }, { hiragana: 'べ', romaji: 'be' }, { hiragana: 'ぼ', romaji: 'bo' },
    { hiragana: 'ぱ', romaji: 'pa' }, { hiragana: 'ぴ', romaji: 'pi' }, { hiragana: 'ぷ', romaji: 'pu' }, { hiragana: 'ぺ', romaji: 'pe' }, { hiragana: 'ぽ', romaji: 'po' },
    { hiragana: 'きゃ', romaji: 'kya' }, { hiragana: 'きゅ', romaji: 'kyu' }, { hiragana: 'きょ', romaji: 'kyo' },
    { hiragana: 'しゃ', romaji: 'sha' }, { hiragana: 'しゅ', romaji: 'shu' }, { hiragana: 'しょ', romaji: 'sho' },
    { hiragana: 'ちゃ', romaji: 'cha' }, { hiragana: 'ちゅ', romaji: 'chu' }, { hiragana: 'ちょ', romaji: 'cho' },
    { hiragana: 'にゃ', romaji: 'nya' }, { hiragana: 'にゅ', romaji: 'nyu' }, { hiragana: 'にょ', romaji: 'nyo' },
    { hiragana: 'ひゃ', romaji: 'hya' }, { hiragana: 'ひゅ', romaji: 'hyu' }, { hiragana: 'ひょ', romaji: 'hyo' },
    { hiragana: 'みゃ', romaji: 'mya' }, { hiragana: 'みゅ', romaji: 'myu' }, { hiragana: 'みょ', romaji: 'myo' },
    { hiragana: 'りゃ', romaji: 'rya' }, { hiragana: 'りゅ', romaji: 'ryu' }, { hiragana: 'りょ', romaji: 'ryo' },
    { hiragana: 'ぎゃ', romaji: 'gya' }, { hiragana: 'ぎゅ', romaji: 'gyu' }, { hiragana: 'ぎょ', romaji: 'gyo' },
    { hiragana: 'じゃ', romaji: 'ja' }, { hiragana: 'じゅ', romaji: 'ju' }, { hiragana: 'じょ', romaji: 'jo' },
    { hiragana: 'びゃ', romaji: 'bya' }, { hiragana: 'びゅ', romaji: 'byu' }, { hiragana: 'びょ', romaji: 'byo' },
    { hiragana: 'ぴゃ', romaji: 'pya' }, { hiragana: 'ぴゅ', romaji: 'pyu' }, { hiragana: 'ぴょ', romaji: 'pyo' },
    { hiragana: 'っ', romaji: '(gemination)' }, { hiragana: 'ゐ', romaji: 'wi' }, { hiragana: 'ゑ', romaji: 'we' }
];

let currentKanaIndex = 0;
let myChart = null; // Store chart instance

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    speechSynthesis.speak(utterance);
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    const currentKana = kanaData[currentKanaIndex];
    const feedback = document.getElementById('feedback');
    if (userInput === currentKana.romaji) {
        feedback.textContent = 'Correct!';
        feedback.className = 'mt-4 text-green-600';
    } else {
        feedback.textContent = `Wrong! It's ${currentKana.romaji}.`;
        feedback.className = 'mt-4 text-red-600';
    }
    document.getElementById('user-input').value = '';
}

function nextKana() {
    currentKanaIndex = Math.floor(Math.random() * kanaData.length);
    document.getElementById('kana-display').textContent = kanaData[currentKanaIndex].hiragana;
    document.getElementById('feedback').textContent = '';
    document.getElementById('user-input').value = '';
}

function saveProgress(kana, checked) {
    let progress = JSON.parse(localStorage.getItem('kanaProgress') || '{}');
    progress[kana] = checked;
    localStorage.setItem('kanaProgress', JSON.stringify(progress));
    updateProgressChart();
}

function loadProgress() {
    const progress = JSON.parse(localStorage.getItem('kanaProgress') || '{}');
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        const kana = checkbox.getAttribute('onchange').match(/'([^']+)'/)[1];
        checkbox.checked = !!progress[kana];
    });
    updateProgressChart();
}

function resetProgress() {
    localStorage.removeItem('kanaProgress');
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    updateProgressChart();
}

function updateProgressChart() {
    const canvas = document.getElementById('myChart');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Failed to get canvas context');
        return;
    }

    const progress = JSON.parse(localStorage.getItem('kanaProgress') || '{}');
    const categories = [
        { name: 'Basic Kana', start: 0, end: 46 },
        { name: 'Voiced Kana', start: 46, end: 71 },
        { name: 'Yōon', start: 71, end: 104 },
        { name: 'Small Kana', start: 104, end: 107 }
    ];
    const data = categories.map(category => {
        let count = 0;
        for (let i = category.start; i < category.end; i++) {
            if (progress[kanaData[i].hiragana]) count++;
        }
        return (count / (category.end - category.start)) * 100;
    });

    console.log('Progress data:', data); // Debugging

    // Destroy existing chart if it exists
    if (myChart) {
        myChart.destroy();
    }

    // Create new chart
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories.map(c => c.name),
            datasets: [{
                label: 'Kana Mastered (%)',
                data: data,
                backgroundColor: ['#4f46e5', '#7c3aed', '#a855f7', '#ec4899'],
                borderColor: ['#312e81', '#4c1d95', '#6d28d9', '#be185d'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage Mastered(%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Kana Categories'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

document.getElementById('search').addEventListener('input', function (e) {
    const search = e.target.value.toLowerCase().trim();
    document.querySelectorAll('tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = search === '' || text.includes(search) ? '' : 'none';
    });
});

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkAnswer();
});

window.addEventListener('load', function () {
    if (localStorage.getItem('darkMode') === 'true') document.documentElement.classList.add('dark');
    loadProgress();
    nextKana();
    updateProgressChart();
});