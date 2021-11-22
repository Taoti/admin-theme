/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */

'use strict';

(($, Drupal, drupalSettings) => {
  Drupal.behaviors.ginCKEditor = {
    attach: function attach(context) {
      if (window.CKEDITOR && CKEDITOR !== undefined) {
        // If on CKEditor config, do nothing.
        if (drupalSettings.path.currentPath.indexOf('admin/config/content/formats/manage') > -1) {
          return;
        }

        // Get configs.
        const accentCss = drupalSettings.gin.accent_css_path;
        const contentsCss = drupalSettings.gin.ckeditor_css_path;
        const accentColorPreset = drupalSettings.gin.preset_accent_color;
        const darkmodeClass = drupalSettings.gin.darkmode_class;

        // Class for Darkmode.
        if (
          localStorage.getItem('GinDarkMode') == 1 ||
          localStorage.getItem('GinDarkMode') === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          CKEDITOR.config.bodyClass = darkmodeClass;
        }

        // Content stylesheets.
        if (CKEDITOR.config.contentsCss === undefined) {
          CKEDITOR.config.contentsCss.push(accentCss);
          CKEDITOR.config.contentsCss.push(contentsCss);
        }

        // Contextmenu stylesheets.
        if (CKEDITOR.config.contextmenu_contentsCss === undefined) {
          CKEDITOR.config.contextmenu_contentsCss = new Array();
          CKEDITOR.config.contextmenu_contentsCss.push(CKEDITOR.skin.getPath('editor'));
          CKEDITOR.config.contextmenu_contentsCss.push(accentCss);
          CKEDITOR.config.contextmenu_contentsCss.push(contentsCss);
        }

        $(CKEDITOR.instances, context).once('gin_ckeditor').each(function(index, value) {
          CKEDITOR.on('instanceReady', function() {
            Object.entries(value).forEach(([key, editor]) => {
              // Initial accent color.
              $(editor.document.$)
                  .find('body')
                  .attr('data-gin-accent', accentColorPreset);

              // Change from Code to Editor.
              editor.on('mode', function() {
                if (this.mode == 'wysiwyg') {
                  $(editor.document.$)
                    .find('body')
                    .attr('data-gin-accent', accentColorPreset);

                  if (localStorage.getItem('GinDarkMode') === 'auto') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      $(editor.document.$)
                        .find('body')
                        .addClass(darkmodeClass);
                    } else {
                      $(editor.document.$)
                        .find('body')
                        .removeClass(darkmodeClass);
                    }
                  }
                }
              });

              // Contextual menu.
              editor.on('menuShow', function() {
                const darkModeClass = window.matchMedia('(prefers-color-scheme: dark)').matches ? darkmodeClass : '';
                $('body > .cke_menu_panel > iframe')
                  .contents()
                  .find('body')
                  .addClass(darkModeClass)
                  .attr('data-gin-accent', accentColorPreset);
              });

              // Toggle Darkmode.
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (e.matches && localStorage.getItem('GinDarkMode') === 'auto') {
                  $(editor.document.$)
                    .find('body')
                    .addClass(darkmodeClass);

                  $('body > .cke_menu_panel > iframe')
                    .contents()
                    .find('body')
                    .addClass(darkmodeClass);
                }
              });

              // Change to Lightmode.
              window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                if (e.matches && localStorage.getItem('GinDarkMode') === 'auto') {
                  $(editor.document.$)
                    .find('body')
                    .removeClass(darkmodeClass);

                  $('body > .cke_menu_panel > iframe')
                    .contents()
                    .find('body')
                    .removeClass(darkmodeClass);
                }
              });
            });
          });
        });
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
