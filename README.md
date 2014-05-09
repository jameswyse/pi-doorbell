# pi-doorbell

Sends a notification to various targets when a doorbell switch is pressed.

## Notifications
Currently supported notification targets:
 - Web - Shows a notification on the web ui using websockets
 - Pushover (iOS, Android, Desktop)
 - XBMC

## TODO
 - Remove piface and use standard GPIO pins
 - Support multiple notification targets (XBMC, Pushover, etc)
 - Support Raspberry Pi camera to take snapshots
 - Support multiple doorbell switch inputs
 - Record activity to database
 - Improve web ui to display activity data

## Planned Notification Targets
 - Audio output (play mp3)
 - GPIO output (control other devices)
 - Plex
 - Email
 - SMS
 - Webhook
 - Boxcar
 - Libnotify
 - Growl / GNTP
 - Prowl
 - Twitter
 - Philips Hue
 - [Ion](https://www.kickstarter.com/projects/lavallc/ion-a-music-detecting-mood-light-with-bluetooth-lo)


## License

The MIT License (MIT)

Copyright (c) 2014 James Wyse <james@jameswyse.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
