# Fabricator Video Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

## Installing

With Fabricator and NPM, simply require this library into your project and restart the Fabricator Grunt build process.

`npm install fab.video --save`

If you are not using Fabricator, you will need to in some manner compile `src/FAB.video.js` into your build process or put it somewhere where you can link it into your projects.

## Usage

### `FAB.video.support();`

Returns boolean of whether browser supports HTML5 video of any kind.

### `FAB.video.supportedTypes();`

Returns an object of supported types. Sample return:

```
{
    h264: 'probably',
    webm: 'probably',
    ogg: 'probably'
}
```

### `FAB.video.create()`

Returns a video element

Accepts one argument, an object of video types and sources. The first video type and source is the most preferred.

Example:

```
FAB.video.create({
    h264: '/my/video/file.mp4',
    webm: '/my/video/file.webm',
    ogg: 'my/video/file.ogg'
});
```

## License

Copyright 2017 TJ Draper, BuzzingPixel, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
