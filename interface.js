$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  updateTemperature(); // update view
});

$('#temperature-down').on('click', function() { // event listener
  thermostat.down(); // update model
  updateTemperature(); // update view
})

$('#temperature-reset').on('click', function() { // event listener
  thermostat.resetTemperature(); // update model
  updateTemperature();
});
$('#powersaving-on').on('click', function() { // event listener
  thermostat.switchPowerSavingModeOn(); // update model
  $('#power-saving-status').text('on')
  updateTemperature();
});
$('#powersaving-off').on('click', function() { // event listener
  thermostat.switchPowerSavingModeOff(); // update model
  $('#power-saving-status').text('off')
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);

  if(thermostat.energyUsage() === 'low-usage') {
    $('#temperature').css("color", "green")
  }else if(thermostat.energyUsage() === 'medium-usage') {
    $('#temperature').css("color", "purple") 

    }else{
      $("#temperature").css("color", "red")
    }

};
});
