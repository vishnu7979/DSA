 // Defining the region of interest
 var gaul1 = ee.FeatureCollection("FAO/GAUL/2015/level1");
 var indianStates = gaul1.filter(ee.Filter.eq('ADM0_NAME', 'India'));
 var roi = indianStates.filter(ee.Filter.eq('ADM1_NAME', 'Kerala'));
 

 Map.centerObject(roi);
 Map.addLayer(roi);
 
 // Setting the time interval
 var starting = '2010-01-01';
 var ending = '2023-01-01';
 
 // Applying unit conversion
 var eraPrec = ee.ImageCollection("ECMWF/ERA5_LAND/DAILY_AGGR")
  .filterDate(starting, ending)
  .filterBounds(roi);
 
 // Printing the collection
 print('Collection:', eraPrec);
 print('Number of images:', eraPrec.size());
 
 // Function to convert m to mm and add property to the collection
 var Precipitation = function(img){
  // Precipitation units are depth in meters: divide to get m / mm
  var bands = img.select('total_precipitation_sum').multiply(1000).clip(roi);
  return bands.rename('total_precipitation_sum')
  .set('date', img.date().format('YYYY-MM-dd'))
  .copyProperties(img,['system:time_start','system:time_end']);
 };
 
 var eraPrecConverted = eraPrec.map(Precipitation);
 // Generate a chart
 print(
  ui.Chart.image.series({
  imageCollection: eraPrecConverted,
  region: roi, 
  reducer: ee.Reducer.median(), 
  scale: 10000, 
  xProperty: 'system:time_start'
  })
  .setChartType('ColumnChart')
  .setOptions({
  title: 'Precipitation (ERA-5 DAILY) ' + starting,
  vAxis: {title: 'mm'},
  hAxis: {title: 'Date'},
  series: {0: {color: 'blue'}}
  })
 );
 
 // Calculating annual accumulation
 var annualAccumulation = eraPrecConverted.sum().clip(roi);
 
 Map.addLayer (annualAccumulation,
  {palette:['red','orange','cyan','blue','darkblue'],
  min:1018, max:1950},'Ceará'); 