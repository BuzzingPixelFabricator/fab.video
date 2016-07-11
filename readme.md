# Fabricator Video Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

## `FAB.video.support();`

Returns boolean of whether browser supports HTML5 video of any kind.

## `FAB.video.supportedTypes();`

Returns an object of supported types. Sample return:

```
{
	h264: 'probably',
	webm: 'probably',
	ogg: 'probably'
}
```

## `FAB.video.create()`

Returns a video element

Accepts one argument, an object of video types and sources. The first video type and source is the most preferred.

Example:

```
FAB.video.create({}
	h264: '/my/video/file.mp4',
	webm: '/my/video/file.webm',
	ogg: 'my/video/file.ogg'
});
```