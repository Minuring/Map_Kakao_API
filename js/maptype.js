// 지도에 추가된 지도타입정보를 가지고 있을 변수입니다
var currentTypeId;

// 버튼이 클릭되면 호출되는 함수입니다
function setOverlayMapTypeId(maptype) {
    var changeMaptype;
    
    // maptype에 따라 지도에 추가할 지도타입을 결정합니다
    if (maptype === 'traffic') {            
        
        // 교통정보 지도타입
        changeMaptype = kakao.maps.MapTypeId.TRAFFIC;
        
    } else if (maptype === 'roadview') {        
        
        // 로드뷰 도로정보 지도타입
        changeMaptype = kakao.maps.MapTypeId.ROADVIEW;    

    } else if (maptype === 'terrain') {
        
        // 지형정보 지도타입
        changeMaptype = kakao.maps.MapTypeId.TERRAIN;    

    } else if (maptype === 'use_district') {
        
        // 지적편집도 지도타입
        changeMaptype = kakao.maps.MapTypeId.USE_DISTRICT;           
    } else if (maptype === 'bicycle') {
        
        // 지적편집도 지도타입
        changeMaptype = kakao.maps.MapTypeId.BICYCLE;   
    } else if (maptype === 'roadmap') {
        
        // 기본 지도타입
        changeMaptype = kakao.maps.MapTypeId.ROADMAP;
    }
    
    // 이미 등록된 지도 타입이 있으면 제거합니다
    if (currentTypeId) {
        map.removeOverlayMapTypeId(currentTypeId);
    }
    
    // maptype에 해당하는 지도타입을 지도에 추가합니다
    map.addOverlayMapTypeId(changeMaptype);
    
    // 지도에 추가된 타입정보를 갱신합니다
    currentTypeId = changeMaptype;        
}
