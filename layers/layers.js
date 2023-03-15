var wms_layers = [];

var format_Accesibilidadporcomuna_0 = new ol.format.GeoJSON();
var features_Accesibilidadporcomuna_0 = format_Accesibilidadporcomuna_0.readFeatures(json_Accesibilidadporcomuna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporcomuna_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporcomuna_0.addFeatures(features_Accesibilidadporcomuna_0);
var lyr_Accesibilidadporcomuna_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporcomuna_0, 
                style: style_Accesibilidadporcomuna_0,
                interactive: true,
    title: 'Accesibilidad por comuna<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporcomuna_0_4.png" />  Mayor a 1500<br />'
        });
var format_Accesibilidadporbarrio_1 = new ol.format.GeoJSON();
var features_Accesibilidadporbarrio_1 = format_Accesibilidadporbarrio_1.readFeatures(json_Accesibilidadporbarrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadporbarrio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadporbarrio_1.addFeatures(features_Accesibilidadporbarrio_1);
var lyr_Accesibilidadporbarrio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadporbarrio_1, 
                style: style_Accesibilidadporbarrio_1,
                interactive: true,
    title: 'Accesibilidad por barrio<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadporbarrio_1_4.png" />  Mayor a 1500<br />'
        });
var format_Accesibilidadpormanzana_2 = new ol.format.GeoJSON();
var features_Accesibilidadpormanzana_2 = format_Accesibilidadpormanzana_2.readFeatures(json_Accesibilidadpormanzana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidadpormanzana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidadpormanzana_2.addFeatures(features_Accesibilidadpormanzana_2);
var lyr_Accesibilidadpormanzana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidadpormanzana_2, 
                style: style_Accesibilidadpormanzana_2,
                interactive: true,
    title: 'Accesibilidad por manzana<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_0.png" /> Menor a 250<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_1.png" /> 250 - 500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_3.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Accesibilidadpormanzana_2_4.png" /> Mayor a 1500<br />'
        });
var format_Saladeteatro_3 = new ol.format.GeoJSON();
var features_Saladeteatro_3 = format_Saladeteatro_3.readFeatures(json_Saladeteatro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladeteatro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladeteatro_3.addFeatures(features_Saladeteatro_3);
var lyr_Saladeteatro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladeteatro_3, 
                style: style_Saladeteatro_3,
                interactive: true,
                title: '<img src="styles/legend/Saladeteatro_3.png" /> Sala de teatro'
            });
var format_Saladecine_4 = new ol.format.GeoJSON();
var features_Saladecine_4 = format_Saladecine_4.readFeatures(json_Saladecine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladecine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladecine_4.addFeatures(features_Saladecine_4);
var lyr_Saladecine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladecine_4, 
                style: style_Saladecine_4,
                interactive: true,
                title: '<img src="styles/legend/Saladecine_4.png" /> Sala de cine'
            });
var format_Museo_5 = new ol.format.GeoJSON();
var features_Museo_5 = format_Museo_5.readFeatures(json_Museo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museo_5.addFeatures(features_Museo_5);
var lyr_Museo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museo_5, 
                style: style_Museo_5,
                interactive: true,
                title: '<img src="styles/legend/Museo_5.png" /> Museo'
            });
var format_Librera_6 = new ol.format.GeoJSON();
var features_Librera_6 = format_Librera_6.readFeatures(json_Librera_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librera_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librera_6.addFeatures(features_Librera_6);
var lyr_Librera_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librera_6, 
                style: style_Librera_6,
                interactive: true,
                title: '<img src="styles/legend/Librera_6.png" /> Librería'
            });
var format_Galeradearte_7 = new ol.format.GeoJSON();
var features_Galeradearte_7 = format_Galeradearte_7.readFeatures(json_Galeradearte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galeradearte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galeradearte_7.addFeatures(features_Galeradearte_7);
var lyr_Galeradearte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galeradearte_7, 
                style: style_Galeradearte_7,
                interactive: true,
                title: '<img src="styles/legend/Galeradearte_7.png" /> Galería de arte'
            });
var format_Espacioferial_8 = new ol.format.GeoJSON();
var features_Espacioferial_8 = format_Espacioferial_8.readFeatures(json_Espacioferial_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioferial_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioferial_8.addFeatures(features_Espacioferial_8);
var lyr_Espacioferial_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioferial_8, 
                style: style_Espacioferial_8,
                interactive: true,
                title: '<img src="styles/legend/Espacioferial_8.png" /> Espacio ferial'
            });
var format_Espaciodeformacin_9 = new ol.format.GeoJSON();
var features_Espaciodeformacin_9 = format_Espaciodeformacin_9.readFeatures(json_Espaciodeformacin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciodeformacin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciodeformacin_9.addFeatures(features_Espaciodeformacin_9);
var lyr_Espaciodeformacin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciodeformacin_9, 
                style: style_Espaciodeformacin_9,
                interactive: true,
                title: '<img src="styles/legend/Espaciodeformacin_9.png" /> Espacio de formación'
            });
var format_Disquera_10 = new ol.format.GeoJSON();
var features_Disquera_10 = format_Disquera_10.readFeatures(json_Disquera_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disquera_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disquera_10.addFeatures(features_Disquera_10);
var lyr_Disquera_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disquera_10, 
                style: style_Disquera_10,
                interactive: true,
                title: '<img src="styles/legend/Disquera_10.png" /> Disquería'
            });
var format_Clubdemsicaenvivo_11 = new ol.format.GeoJSON();
var features_Clubdemsicaenvivo_11 = format_Clubdemsicaenvivo_11.readFeatures(json_Clubdemsicaenvivo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubdemsicaenvivo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubdemsicaenvivo_11.addFeatures(features_Clubdemsicaenvivo_11);
var lyr_Clubdemsicaenvivo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubdemsicaenvivo_11, 
                style: style_Clubdemsicaenvivo_11,
                interactive: true,
                title: '<img src="styles/legend/Clubdemsicaenvivo_11.png" /> Club de música en vivo'
            });
var format_Centrocultural_12 = new ol.format.GeoJSON();
var features_Centrocultural_12 = format_Centrocultural_12.readFeatures(json_Centrocultural_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrocultural_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrocultural_12.addFeatures(features_Centrocultural_12);
var lyr_Centrocultural_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrocultural_12, 
                style: style_Centrocultural_12,
                interactive: true,
                title: '<img src="styles/legend/Centrocultural_12.png" /> Centro cultural'
            });
var format_Biblioteca_13 = new ol.format.GeoJSON();
var features_Biblioteca_13 = format_Biblioteca_13.readFeatures(json_Biblioteca_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_13.addFeatures(features_Biblioteca_13);
var lyr_Biblioteca_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca_13, 
                style: style_Biblioteca_13,
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_13.png" /> Biblioteca'
            });
var format_Bar_14 = new ol.format.GeoJSON();
var features_Bar_14 = format_Bar_14.readFeatures(json_Bar_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bar_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bar_14.addFeatures(features_Bar_14);
var lyr_Bar_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bar_14, 
                style: style_Bar_14,
                interactive: true,
                title: '<img src="styles/legend/Bar_14.png" /> Bar'
            });
var format_Anfiteatro_15 = new ol.format.GeoJSON();
var features_Anfiteatro_15 = format_Anfiteatro_15.readFeatures(json_Anfiteatro_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anfiteatro_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anfiteatro_15.addFeatures(features_Anfiteatro_15);
var lyr_Anfiteatro_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anfiteatro_15, 
                style: style_Anfiteatro_15,
                interactive: true,
                title: '<img src="styles/legend/Anfiteatro_15.png" /> Anfiteatro'
            });

        var lyr_MapaBase_16 = new ol.layer.Tile({
            'title': '',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var group_Espaciosculturalessegntipo = new ol.layer.Group({
                                layers: [lyr_Saladeteatro_3,lyr_Saladecine_4,lyr_Museo_5,lyr_Librera_6,lyr_Galeradearte_7,lyr_Espacioferial_8,lyr_Espaciodeformacin_9,lyr_Disquera_10,lyr_Clubdemsicaenvivo_11,lyr_Centrocultural_12,lyr_Biblioteca_13,lyr_Bar_14,lyr_Anfiteatro_15,],
                                title: "Espacios culturales según tipo"});
var group_Accesibilidadfsicaaespaciosculturalesenmts = new ol.layer.Group({
                                layers: [lyr_Accesibilidadporcomuna_0,lyr_Accesibilidadporbarrio_1,lyr_Accesibilidadpormanzana_2,],
                                title: "Accesibilidad física a espacios culturales (en mts)"});

lyr_Accesibilidadporcomuna_0.setVisible(false);lyr_Accesibilidadporbarrio_1.setVisible(false);lyr_Accesibilidadpormanzana_2.setVisible(true);lyr_Saladeteatro_3.setVisible(false);lyr_Saladecine_4.setVisible(false);lyr_Museo_5.setVisible(false);lyr_Librera_6.setVisible(false);lyr_Galeradearte_7.setVisible(false);lyr_Espacioferial_8.setVisible(false);lyr_Espaciodeformacin_9.setVisible(false);lyr_Disquera_10.setVisible(false);lyr_Clubdemsicaenvivo_11.setVisible(false);lyr_Centrocultural_12.setVisible(false);lyr_Biblioteca_13.setVisible(false);lyr_Bar_14.setVisible(false);lyr_Anfiteatro_15.setVisible(false);lyr_MapaBase_16.setVisible(true);
var layersList = [lyr_MapaBase_16,group_Accesibilidadfsicaaespaciosculturalesenmts,group_Espaciosculturalessegntipo];
lyr_Accesibilidadporcomuna_0.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'distancia_espacios_compuestos': 'Distancia promedio por Comuna', });
lyr_Accesibilidadporbarrio_1.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'distancia_espacios_compuestos': 'Distancia promedio por Barrio', });
lyr_Accesibilidadpormanzana_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'promedio_espacios_compuestos': 'Distancia promedio de la manzana', });
lyr_Saladeteatro_3.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Saladecine_4.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Museo_5.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Librera_6.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Galeradearte_7.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espacioferial_8.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espaciodeformacin_9.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Disquera_10.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Clubdemsicaenvivo_11.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Centrocultural_12.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Biblioteca_13.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Bar_14.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Anfiteatro_15.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Accesibilidadporcomuna_0.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'distancia_espacios_compuestos': 'TextEdit', });
lyr_Accesibilidadporbarrio_1.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'distancia_espacios_compuestos': 'TextEdit', });
lyr_Accesibilidadpormanzana_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'promedio_espacios_compuestos': 'TextEdit', });
lyr_Saladeteatro_3.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Saladecine_4.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Museo_5.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Librera_6.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Galeradearte_7.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espacioferial_8.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espaciodeformacin_9.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Disquera_10.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Clubdemsicaenvivo_11.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Centrocultural_12.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Biblioteca_13.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Bar_14.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Anfiteatro_15.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Accesibilidadporcomuna_0.set('fieldLabels', {'fid': 'Hidden', 'COMUNA': 'inline label', 'distancia_espacios_compuestos': 'inline label', });
lyr_Accesibilidadporbarrio_1.set('fieldLabels', {'fid': 'Hidden', 'barrio': 'inline label', 'distancia_espacios_compuestos': 'inline label', });
lyr_Accesibilidadpormanzana_2.set('fieldLabels', {'fid': 'Hidden', 'COMUNA': 'inline label', 'promedio_espacios_compuestos': 'inline label', });
lyr_Saladeteatro_3.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Saladecine_4.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Museo_5.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Librera_6.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Galeradearte_7.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espacioferial_8.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espaciodeformacin_9.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Disquera_10.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Clubdemsicaenvivo_11.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Centrocultural_12.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Biblioteca_13.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Bar_14.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Anfiteatro_15.set('fieldLabels', {'fid': 'Hidden', 'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Anfiteatro_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});