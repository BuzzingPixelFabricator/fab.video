/*----------------------------------------------------------------------------*\
 # Copyright 2017, BuzzingPixel, LLC

 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

// Make sure FAB is defined
window.FABNAMESPACE = window.FABNAMESPACE || 'FAB';
window[window.FABNAMESPACE] = window.window[window.FABNAMESPACE] || {};

(function(F, D) {
    'use strict';

    // Supports video variable
    var support;

    // Support types object
    var supportedTypes = {
        h264: null,
        webm: null,
        ogg: null
    };

    // Type Map
    var typeMap = {
        h264: 'video/mp4',
        webm: 'video/webm',
        ogg: 'video/ogg'
    };

    /**
     * Run check
     *
     * called once on demand to populate varibles
     */
    var runCheck = function() {
        // Create a video element
        var el = D.createElement('video');

        // Check if video element can play video at all (browser video support)
        if (! el.canPlayType) {
            // If it cannot play video, set the support variable to false
            support = false;

            // Clear out the element to make sure memory is cleared
            // (well, as much as we can with JS anyway)
            el = null;

            // We're done here
            return;
        }

        // Why yes, we do support video
        support = true;

        // Check if we support h264
        supportedTypes.h264 = el.canPlayType(
            'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        );

        // Check if we support webm
        supportedTypes.webm = el.canPlayType(
            'video/webm; codecs="vp8, vorbis"'
        );

        // Check if we support ogg
        supportedTypes.ogg = el.canPlayType(
            'video/ogg; codecs="theora, vorbis"'
        );

        // Clear out the element to make sure memory is cleared
        // (well, as much as we can with JS anyway)
        el = null;
    };

    /**
     * Create video element
     *
     * @param {string} type
     * @param {string} path
     * @return object
     */
    var create = function(type, path) {
        // Create a video element
        var video = D.createElement('video');

        // Create source element
        var source = D.createElement('source');

        // Set the source type parameter
        source.type = typeMap[type];

        // Set the source src parameter
        source.src = path;

        // Append the source to the video
        video.appendChild(source);

        // Return the video element
        return video;
    };

    // Create a FAB object for video functions
    F.video = {
        /**
         * Does the browser support video?
         *
         * @return {bool}
         */
        support: function() {
            if (support === undefined) {
                runCheck();
            }

            return support;
        },

        /**
         * Get the types of video the browser supports
         *
         * @return {object}
         */
        supportedTypes: function() {
            if (support === undefined) {
                runCheck();
            }

            return supportedTypes;
        },

        /**
         * Create a video element based on best browser support
         *
         * @param {object} formatOrderPaths
         * @return {object} Video element
         */
        create: function(formatOrderPaths) {
            var i;
            var selected;

            // Make sure incoming argument is an object
            formatOrderPaths = formatOrderPaths || {};

            // Loop through the format options
            for (i in formatOrderPaths) {
                // If support is probably this is the best optino
                if (supportedTypes[i] === 'probably') {
                    // Set this option as the selected option
                    selected = i;

                    // Break the loop
                    break;

                /**
                 * If support is maybe, keep this in reserve. We'll use it if
                 * there's nothing better
                 */
                } else if (supportedTypes[i] === 'maybe' && ! selected) {
                    selected = i;
                }
            }

            // If we did not get a selection, just use the first item
            if (! selected) {
                // Get the first one
                for (i in formatOrderPaths) {
                    // Set this option as the selected option
                    selected = i;

                    // Break the loop
                    break;
                }
            }

            // Create the element
            return create(selected, formatOrderPaths[selected]);
        }
    };
})(window[window.FABNAMESPACE], document);
