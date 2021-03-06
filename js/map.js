
function initMap() {
    var latlng = new google.maps.LatLng(51.508742,-0.120850);
    var latlng2 = new google.maps.LatLng(51.508742,-0.120850);
    var myOptions = {
        zoom: 12,
        center: latlng,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]

    };

    var myOptions2 =  {
        zoom: 12,
        center: latlng2,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    

    var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map,
        icon: 'images/marker.png',
        title:"China"
   });

}


