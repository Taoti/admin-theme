!function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(o,c,function(t){return e[t]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}({51:function(e,t,n){e.exports=n(52)},52:function(){"use strict";var e,t,n;e=jQuery,t=Drupal,n=drupalSettings,t.behaviors.ginSettings={attach:function(o){e('input[name="enable_darkmode"]',o).change((function(){var n=e(this).is(":checked"),o=e('select[name="preset_accent_color"]').val(),c=e('select[name="preset_focus_color"]').val();t.behaviors.ginAccent.darkmode(n),t.behaviors.ginAccent.setAccentColor(o),t.behaviors.ginAccent.setFocusColor(c)})),e('select[name="preset_accent_color"]',o).change((function(){var n=e(this).val();t.behaviors.ginAccent.setAccentColor(n)})),e('input[name="accent_color"]',o).change((function(){var n=e(this).val();t.behaviors.ginAccent.setCustomAccentColor("custom",n)})),e('select[name="preset_focus_color"]',o).change((function(){var n=e(this).val();t.behaviors.ginAccent.setFocusColor(n)})),e('input[name="focus_color"]',o).change((function(){var n=e('select[name="preset_focus_color"]').val(),o=e(this).val();t.behaviors.ginAccent.setFocusColor(n,o)})),e('input[name="high_contrast_mode"]',o).change((function(){var n=e(this).is(":checked");t.behaviors.ginAccent.setHighContrastMode(n)})),e('input[name="enable_user_settings"]',o).change((function(){var o=e(this).is(":checked"),c=e('input[name="enable_darkmode"]').is(":checked"),r=e('select[name="preset_accent_color"]').val(),a=e('select[name="preset_focus_color"]').val(),i=e('input[name="high_contrast_mode"]').is(":checked");o||(c=n.gin.darkmode_class,r=n.gin.preset_accent_color,a=n.gin.preset_focus_color,i=n.gin.high_contrast_mode),t.behaviors.ginAccent.darkmode(c),t.behaviors.ginAccent.setAccentColor(r),t.behaviors.ginAccent.setFocusColor(a),t.behaviors.ginAccent.setHighContrastMode(i)}))}}}});