// 도시 데이터 (JSON 파일 대신 직접 포함)
const citiesData = [
  {"id": 1, "name": "밀라노", "country": "이탈리아", "description": "고딕 양식의 정점 두오모와 인근 코모 호수의 대자연.", "drivingTime": 6.5, "flightTime": 1.5, "lat": 45.4642, "lng": 9.1900},
  {"id": 2, "name": "코모", "country": "이탈리아", "description": "알프스 자락의 보석 같은 호수와 화려한 역사를 가진 빌라들.", "drivingTime": 6, "flightTime": 1.5, "lat": 45.8081, "lng": 9.0852},
  {"id": 3, "name": "베로나", "country": "이탈리아", "description": "'로미오와 줄리엣'의 무대이자 로마 시대 원형 경기장이 남은 도시.", "drivingTime": 7, "flightTime": 1.5, "lat": 45.4384, "lng": 10.9916},
  {"id": 4, "name": "베네치아", "country": "이탈리아", "description": "운하 위의 역사 도시. 개트윅 직항이 매우 많습니다.", "drivingTime": 7.5, "flightTime": 2, "lat": 45.4408, "lng": 12.3155},
  {"id": 5, "name": "볼차노", "country": "이탈리아", "description": "돌로미티 산맥의 관문이자 오스트리아-이탈리아 문화가 섞인 역사 도시.", "drivingTime": 6, "flightTime": 1.5, "lat": 46.4983, "lng": 11.3548},
  {"id": 6, "name": "자그레브", "country": "크로아티아", "description": "중세풍 상부 도시와 활기찬 광장.", "drivingTime": 7, "flightTime": 1.75, "lat": 45.8150, "lng": 15.9819},
  {"id": 7, "name": "로비니", "country": "크로아티아", "description": "아드리아해의 진주. 이탈리아풍 건축물과 푸른 바다의 조화.", "drivingTime": 8, "flightTime": 2, "lat": 45.0819, "lng": 13.6381},
  {"id": 8, "name": "하이델베르크", "country": "독일", "description": "철학자의 길과 고성, 네카어강의 낭만.", "drivingTime": 1, "flightTime": null, "lat": 49.3988, "lng": 8.6724},
  {"id": 9, "name": "바덴바덴", "country": "독일", "description": "블랙 포레스트의 온천 휴양지.", "drivingTime": 1.5, "flightTime": null, "lat": 48.7606, "lng": 8.2398},
  {"id": 10, "name": "로텐부르크", "country": "독일", "description": "중세의 모습을 완벽히 간직한 독일 최고의 동화 마을.", "drivingTime": 2, "flightTime": null, "lat": 49.3780, "lng": 10.1786},
  {"id": 11, "name": "뷔르츠부르크", "country": "독일", "description": "화려한 바로크 궁전과 와인 언덕.", "drivingTime": 1.5, "flightTime": null, "lat": 49.7913, "lng": 9.9534},
  {"id": 12, "name": "밤베르크", "country": "독일", "description": "'독일의 베네치아'로 불리는 유네스코 유산.", "drivingTime": 2.5, "flightTime": null, "lat": 49.8987, "lng": 10.9007},
  {"id": 13, "name": "뉘른베르크", "country": "독일", "description": "신성로마제국의 역사가 살아있는 성곽 도시.", "drivingTime": 2.5, "flightTime": null, "lat": 49.4521, "lng": 11.0767},
  {"id": 14, "name": "코블렌츠", "country": "독일", "description": "라인강과 모젤강이 만나는 역사적 거점.", "drivingTime": 1.5, "flightTime": null, "lat": 50.3569, "lng": 7.5890},
  {"id": 15, "name": "코쳄", "country": "독일", "description": "모젤강변의 아름다운 성과 포도밭.", "drivingTime": 2, "flightTime": null, "lat": 50.1458, "lng": 7.1633},
  {"id": 16, "name": "뮌헨", "country": "독일", "description": "바이에른의 수도, 알프스로 가는 관문.", "drivingTime": 4, "flightTime": 1.5, "lat": 48.1351, "lng": 11.5820},
  {"id": 17, "name": "퓌센", "country": "독일", "description": "노이슈반슈타인 성과 알프스 호수.", "drivingTime": 4.5, "flightTime": null, "lat": 47.5708, "lng": 10.7000},
  {"id": 18, "name": "베르히테스가덴", "country": "독일", "description": "쾨니히스 호수와 알프스의 절경.", "drivingTime": 6, "flightTime": null, "lat": 47.6313, "lng": 13.0042},
  {"id": 19, "name": "스트라스부르", "country": "프랑스", "description": "운하와 거대 성당이 있는 알자스의 수도.", "drivingTime": 2.5, "flightTime": null, "lat": 48.5734, "lng": 7.7521},
  {"id": 20, "name": "콜마르", "country": "프랑스", "description": "동화 같은 하프팀버 가옥과 운하.", "drivingTime": 3, "flightTime": null, "lat": 48.0794, "lng": 7.3586},
  {"id": 21, "name": "에기샤임", "country": "프랑스", "description": "프랑스인이 사랑하는 가장 아름다운 마을.", "drivingTime": 3, "flightTime": null, "lat": 48.1808, "lng": 7.3044},
  {"id": 22, "name": "랭스", "country": "프랑스", "description": "샴페인의 본고장과 왕들의 대관식 성당.", "drivingTime": 4, "flightTime": 1.5, "lat": 49.2583, "lng": 4.0317},
  {"id": 23, "name": "메스", "country": "프랑스", "description": "아름다운 정원과 중세-현대 예술의 조화.", "drivingTime": 2.5, "flightTime": null, "lat": 49.1193, "lng": 6.1757},
  {"id": 24, "name": "안시", "country": "프랑스", "description": "'알프스의 베네치아'라 불리는 투명한 호수 도시.", "drivingTime": 6.5, "flightTime": null, "lat": 45.8992, "lng": 6.1294},
  {"id": 25, "name": "샤모니 몽블랑", "country": "프랑스", "description": "몽블랑 산맥의 웅장한 자연.", "drivingTime": 7, "flightTime": null, "lat": 45.9237, "lng": 6.8694},
  {"id": 26, "name": "룩셈부르크 시티", "country": "룩셈부르크", "description": "계곡 위 요새 도시의 장관.", "drivingTime": 2.5, "flightTime": null, "lat": 49.6116, "lng": 6.1319},
  {"id": 27, "name": "브뤼헤", "country": "벨기에", "description": "시간이 멈춘 듯한 중세 운하 도시.", "drivingTime": 4.5, "flightTime": 1.5, "lat": 51.2093, "lng": 3.2247},
  {"id": 28, "name": "겐트", "country": "벨기에", "description": "화려한 중세 건축과 운하의 낭만.", "drivingTime": 4.5, "flightTime": 1.5, "lat": 51.0543, "lng": 3.7174},
  {"id": 29, "name": "안트베르펜", "country": "벨기에", "description": "루벤스의 예술과 장엄한 건축.", "drivingTime": 4, "flightTime": 1.5, "lat": 51.2194, "lng": 4.4025},
  {"id": 30, "name": "마스트리히트", "country": "네덜란드", "description": "로마 유적이 남은 고풍스러운 도시.", "drivingTime": 3, "flightTime": null, "lat": 50.8514, "lng": 5.6910},
  {"id": 31, "name": "위트레흐트", "country": "네덜란드", "description": "독특한 이층 운하를 가진 역사 도시.", "drivingTime": 4, "flightTime": null, "lat": 52.0907, "lng": 5.1214},
  {"id": 32, "name": "바젤", "country": "스위스", "description": "라인강변의 예술과 중세의 만남.", "drivingTime": 3.5, "flightTime": null, "lat": 47.5596, "lng": 7.5886},
  {"id": 33, "name": "취리히", "country": "스위스", "description": "호수와 세련된 구시가지.", "drivingTime": 4.5, "flightTime": 1.5, "lat": 47.3769, "lng": 8.5417},
  {"id": 34, "name": "루체른", "country": "스위스", "description": "카펠교와 피라투스 산의 절경.", "drivingTime": 5, "flightTime": null, "lat": 47.0502, "lng": 8.3093},
  {"id": 35, "name": "베른", "country": "스위스", "description": "유네스코 구시가지와 에메랄드빛 아레강.", "drivingTime": 5.5, "flightTime": null, "lat": 46.9481, "lng": 7.4474},
  {"id": 36, "name": "인스브루크", "country": "오스트리아", "description": "알프스 산이 감싸고 있는 중세 도시.", "drivingTime": 5.5, "flightTime": null, "lat": 47.2692, "lng": 11.4041},
  {"id": 37, "name": "잘츠부르크", "country": "오스트리아", "description": "모차르트와 사운드 오브 뮤직의 배경.", "drivingTime": 5.5, "flightTime": null, "lat": 47.8095, "lng": 13.0550},
  {"id": 38, "name": "할슈타트", "country": "오스트리아", "description": "세계에서 가장 아름다운 호수 마을.", "drivingTime": 6.5, "flightTime": null, "lat": 47.5622, "lng": 13.6493},
  {"id": 39, "name": "프라하", "country": "체코", "description": "'백탑의 도시', 중세 건축의 정점.", "drivingTime": 5.5, "flightTime": 1.75, "lat": 50.0755, "lng": 14.4378},
  {"id": 40, "name": "카를로비 바리", "country": "체코", "description": "숲속에 자리 잡은 왕실 온천 휴양지.", "drivingTime": 4.5, "flightTime": null, "lat": 50.2305, "lng": 12.8711}
];

let map;
let cities = citiesData;
let currentCity = null;

// 지도 초기화
function initMap() {
    // 중앙 유럽을 중심으로 지도 생성
    map = L.map('map').setView([48.0, 10.0], 5);
    
    // OpenStreetMap 타일 레이어 추가
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // 도시 데이터는 이미 로드됨
    cities = citiesData;
    
    // 마커 추가
    addMarkers();
}

// 마커 추가
function addMarkers() {
    cities.forEach(city => {
        const marker = L.marker([city.lat, city.lng])
            .addTo(map)
            .bindPopup(`<b>${city.name}</b><br>${city.country}`)
            .on('click', () => {
                showCityImages(city);
            });
    });
}

// 도시 이미지 표시
async function showCityImages(city) {
    currentCity = city;
    const gallery = document.getElementById('imageGallery');
    const title = document.getElementById('galleryTitle');
    const grid = document.getElementById('imageGrid');
    
    title.textContent = `${city.name}, ${city.country}`;
    grid.innerHTML = '<div style="text-align: center; padding: 20px;">이미지를 불러오는 중...</div>';
    gallery.classList.add('active');
    
    // Unsplash API를 사용하여 이미지 가져오기 (무료, API 키 없이도 사용 가능하지만 제한적)
    // 또는 Google Custom Search API 사용 (API 키 필요)
    // 여기서는 Unsplash의 공개 API를 사용하겠습니다
    
    try {
        const searchQuery = `${city.name} ${city.country} travel`;
        const images = await fetchCityImages(searchQuery);
        
        grid.innerHTML = '';
        images.forEach((imageUrl, index) => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.className = 'image-item';
            img.alt = `${city.name} 이미지 ${index + 1}`;
            img.onclick = () => window.open(imageUrl, '_blank');
            img.onerror = function() {
                this.style.display = 'none';
            };
            grid.appendChild(img);
        });
    } catch (error) {
        console.error('이미지를 불러오는 중 오류 발생:', error);
        grid.innerHTML = '<div style="text-align: center; padding: 20px; color: #999;">이미지를 불러올 수 없습니다.<br>인터넷 연결을 확인해주세요.</div>';
    }
}

// 도시 이미지 가져오기 (Unsplash 사용)
async function fetchCityImages(query) {
    const images = [];
    
    // Unsplash Source API를 사용하여 이미지 가져오기
    // 검색어를 사용하여 관련 이미지를 가져옵니다
    // 참고: Unsplash Source는 제한적이지만 API 키 없이 사용 가능합니다
    
    // 여러 키워드 조합으로 이미지 가져오기
    const keywords = [
        query,
        query.split(' ')[0] + ' city',
        query.split(' ')[0] + ' travel',
        query.split(' ')[0] + ' tourism'
    ];
    
    for (let i = 0; i < 12; i++) {
        const keyword = keywords[i % keywords.length];
        // Unsplash Source API - 검색어 기반 이미지
        const imageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(keyword)}&sig=${i}`;
        images.push(imageUrl);
    }
    
    return images;
}

// 갤러리 닫기 버튼 이벤트
function setupGalleryClose() {
    const closeBtn = document.getElementById('closeGallery');
    const gallery = document.getElementById('imageGallery');
    
    closeBtn.addEventListener('click', () => {
        gallery.classList.remove('active');
    });
}

// 페이지 로드 시 지도 초기화
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    setupGalleryClose();
});
