Lantern Recipe
=====================

Lantern Recipe is a project by the [Creative Technologists of Toronto](http://cttoronto.com/) that aims to educate people about urban foraging and the local vegetation that surrounds them.
iBeacon lanterns are placed within the urban environment, close to naturally occurring edible vegetation.
Players download a mobile application that has a list of ingredients that they must collect in order to complete their recipe.
The ingredients list contains information and hints about where they can collect their ingredients.
As players follow these clues and approach an active ingredient, the lantern, controlled by an iBeacon will open up to display their ingredient.
By means of BLE communication the ingredient will be unlocked/collected in their mobile app and they can proceed to collect their next ingredient.
Once they have collected all the necessary ingredients their recipe will be revealed and they will be able to taste a real world sample of urban foraged cuisine. Yum.

Technologies: RFduino, PhoneGap, Ionic & Node.js

Project team members can find supporting documentation here: http://tinyurl.com/l2kloqg

## Using this project

You may need to run `$ sudo` with some of the installation instructions.

[Installing PhoneGap](http://docs.phonegap.com/en/3.1.0/guide_cli_index.md.html#The%20Command-line%20Interface)

This project uses the [ionic framework](http://ionicframework.com/)

[Ionic Crash Course](http://tinyurl.com/lwzojd3)

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

## Installation
Make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```
To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd lanternRecipe
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp init
```

## Using Sass

This project makes use of Sass (the SCSS syntax). This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```
Reference: http://sass-lang.com/guide.

##Local Debugging with Apache
It is highly recommended that UI development be run through a local web server. Just point your virtual server to the 'www' project folder.

##Device Debugging with Weinre
For RFduino integration and development you will have to deploy to your device (not a simulator).
For debugging phonegap mobile app development this project uses [weinre](http://tinyurl.com/6quwfna)

In terminal run:
```bash
$ weinre -boundHost <youripaddress>
```
*Weinre runs on port 8080 so be aware in case you are running other servers on that port.*

Navigate to: `http://<youripaddress>:8080` and you should see the web inspector remote. Three sections down you should see the **Target Script** section.

Replace the following script tag in `www/index.html` with the one specified. Really you just need to update the the ip address.
`<script src="http://<youripaddress>:8080/target/target-script-min.js#anonymous"></script>`

To start debugging click the first link at the top of weinre, web inspector remote page. You will see "Targets: none" until you run the app on a device.

##Install the RFduino Phonegap plugin
This should already be done but for reference the git can be found here: https://github.com/don/cordova-plugin-rfduino

Make sure you have your platforms installed first.

To install plugin run:
`$ cordova plugin add com.megster.cordova.rfduino`

The RFduino repo with examples for your RFduino hardware can be found here: https://github.com/RFduino/RFduino

##Run Ionic Phonegap App on a Device
Ionic has its own custom set of command line tools built on top of cordova. To run the phonegap app just run:
```bash
$ ionic run ios -d
```
To quit the debugger just run: Cntr + C OR type `$ quit` then `yes`.

## Issues
https://github.com/blacksanta69/lanternRecipe/issues
