$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').on('click', function() { // event listener
  thermostat.up(); // update model
  $('#temperature').text(thermostat.temperature); // update view
});

$('#temperature-down').on('click', function() { // event listener
  thermostat.down(); // update model
  $('#temperature').text(thermostat.temperature); // update view
})

$('#temperature-reset').on('click', function() { // event listener
  thermostat.resetTemperature(); // update model
  $('#temperature').text(thermostat.temperature);
});
$('#powersaving-on').on('click', function() { // event listener
  thermostat.switchPowerSavingModeOn(); // update model
  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text('on')
});
$('#powersaving-off').on('click', function() { // event listener
  thermostat.switchPowerSavingModeOff(); // update model
  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text('off')
});
});
