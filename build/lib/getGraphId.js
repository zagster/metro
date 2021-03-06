/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
"use strict";

const canonicalize = require("metro-core/src/canonicalize");

function getGraphId(entryFile, options) {
  return JSON.stringify(
    {
      entryFile,
      options: {
        customTransformOptions:
          options.customTransformOptions != null
            ? options.customTransformOptions
            : null,
        dev: options.dev,
        experimentalImportSupport: options.experimentalImportSupport || false,
        hot: options.hot,
        minify: options.minify,
        unstable_disableES6Transforms: options.unstable_disableES6Transforms,
        platform: options.platform != null ? options.platform : null,
        type: options.type
      }
    },
    canonicalize
  );
}

module.exports = getGraphId;
