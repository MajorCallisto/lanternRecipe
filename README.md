Lantern Recipe
=====================

For project setup follow the **Using this project** section. These are boilerplate ionic project setup instructions. Do this first. Then follow the proceeding instructions.

###Ionic Framework
This project uses the **ionic framework**. http://ionicframework.com/

**Ionic Crash Course:** http://tinyurl.com/lwzojd3

###Styling with Sass
Please note that this project makes use of sass for custom styling. Review the **Using Sass** section below. Reference: http://sass-lang.com/guide.
Fire up `$ gulp watch` and edit the `scss/ionic.app.scss` for css styling and off you go.

###Local Debugging with Apache
It is highly recommended that UI development be run through a local web server. Just point your virtual server to the 'www' project folder

###Device Debugging with Weinre
For RFduino integration and development you will have to deploy to your device (not a simulator).
For debugging phonegap mobile app development this project uses **weinre** http://tinyurl.com/6quwfna

In terminal run:
```bash
$ weinre -boundHost <youripaddress>
```
*Weinre runs on port 8080 so be aware in case you are running other servers on that port.*

Navigate to: `http://<youripaddress>:8080` and you should see the web inspector remote. Three sections down you should see the **Target Script** section.

Replace the following script tag in `www/index.html` with the one specified. Really you just need to update the the ip address.
`<script src="http://<youripaddress>:8080/target/target-script-min.js#anonymous"></script>`

To start debugging click the first link at the top of weinre web inspector remote page. You will see "Targets: none" until you run the app on a device.

###Install the RFduino Phonegap plugin
This should already be done but for reference the git can be found here: https://github.com/don/cordova-plugin-rfduino

Make sure you have your platforms installed first.

To install plugin run:
`$ cordova plugin add com.megster.cordova.rfduino`


###Run Ionic Phonegap App on a Device
Ionic has its own custom set of command line tools built on top of cordova. To run the phonegap app just run:
```bash
$ ionic run ios -d
```
To quit the debugger just run: Cntr + C OR type `$ quit` then `yes`.

## Using this project

You may need to run `$ sudo` with some of the installation instructions.

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run:

```bash
$ sudo npm install -g ionic
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

## Installation

While we recommend using the `ionic` utility to create new Ionic projects, you can use this repo as a barebones starting point to your next Ionic app.

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd lanternRecipe
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp init
```

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```
## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!

