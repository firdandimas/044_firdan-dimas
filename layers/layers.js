var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_TectonicPlates_1 = new ol.layer.Tile({
            'title': 'Tectonic Plates',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://earthquake.usgs.gov/basemap/tiles/plates/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TUPLAHWAYAPU_3 = new ol.format.GeoJSON();
var features_TUPLAHWAYAPU_3 = format_TUPLAHWAYAPU_3.readFeatures(json_TUPLAHWAYAPU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUPLAHWAYAPU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUPLAHWAYAPU_3.addFeatures(features_TUPLAHWAYAPU_3);
var lyr_TUPLAHWAYAPU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUPLAHWAYAPU_3, 
                style: style_TUPLAHWAYAPU_3,
                interactive: true,
    title: 'TUPLAH WAYAPU<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_0.png" /> Belukar<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_1.png" /> Belukar Rawa<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_4.png" /> Hutan Mangrove Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_5.png" /> Hutan Rawa Sekunder<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_6.png" /> Pemukiman<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_7.png" /> Perkebunan<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_8.png" /> Pertambangan<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_9.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_10.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_11.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_12.png" /> Sawah<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_13.png" /> Tambak<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_14.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_15.png" /> Transmigrasi<br />\
    <img src="styles/legend/TUPLAHWAYAPU_3_16.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_TectonicPlates_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_TUPLAHWAYAPU_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TectonicPlates_1,lyr_OSMStandard_2,lyr_TUPLAHWAYAPU_3];
lyr_TUPLAHWAYAPU_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_TUPLAHWAYAPU_3.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_TUPLAHWAYAPU_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_TUPLAHWAYAPU_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});