# Thermostat Challenge

Build the logic needed to model a simple thermostat.

#### User stories:

```
As a user
So that I can set the temperature
I want a thermostat that starts at 20 degrees
```

```
As a user
So that I can increase the temperature
I want my thermostat to have an up button
```

```
As a user
So that I can decrease the temperature
I want my thermostat to have a down button
```

```
As a user
So that I don't get too cold
My thermostat should have a minimum temperature of 10 degrees
```

```
As a user
So that I can protect the environment
My thermostat should have a power saving mode (PSM), which is on by default
```

```
As a user
So that I can regulate the temperature and my heating bills
I want PSM to cap the temperature at 25 degrees when switched on
```

```
As a user
So that I can survive the cold winter months
I want PSM to increase the maximum temperature to 32 degrees when switched off
```

```
As a user
So that I can reset the temperature
I want a reset button that sets the temperature to 20 degrees
```

```
As a user
So I can monitor my energy usage
I want the thermostat to tell me whether the current energy usage is low (<18 degrees), medium (18-25 degrees) or high (>25 degrees)
```

![image](https://user-images.githubusercontent.com/33194929/41226363-2e802bec-6d69-11e8-91b6-5a94439ba057.png)

#### How to use

Clone this repository
Run `ruby server.rb` and go to `localhost:4567` in your browser.

#### Technologies:

- Jquery
- Sinatra
- HTML
- JavaScript
- CSS
- Ajax

#### Testing:

- Jasmine

Open the SpecRunner.html file in your browser to see the tests
