Android Install Referrer
========================

This plugin captures the referrer value passed when an android app is installed from a webpage. 

## Install

`cordova plugins add by.redstream.referrer`

## Usage

To use this plugin, add `&referrer=xyz` to app install links on your webpages. For example: 
```
https://play.google.com/store/apps/details?id=your.package.id&referrer=referrer-value
```

## API

```javascript
cordova.plugins.referrer.getReferrer(success, error);
```

## Example
```javascript
cordova.plugins.referrer.getReferrer(function(referrer) {
    conole.log(referrer);
}, function(e) {
    conole.error(e);
});
```

## Testing

To test that the install referrer event is received by the plugin in your emulator:

run `adb shell` and then 

```
am broadcast -a com.android.vending.INSTALL_REFERRER \
-n <your.package.id>/by.redstream.referrer.receiver \
--es "referrer" "referrer-value"
```
