var mapContainer = document.getElementById('map'), // 지도를 표시할 div

mapOption = {
    center: new kakao.maps.LatLng(35.139891, 129.098518), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
    mapTypeId : kakao.maps.MapTypeId.ROADMAP
};

//지도를 미리 생성
var map = new kakao.maps.Map(mapContainer, mapOption);

//주소-좌표 변환 객체를 생성
var geocoder = new kakao.maps.services.Geocoder();

// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);	

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);