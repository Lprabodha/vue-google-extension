let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('resources/scss/popup.scss', 'public/css')
    .js('resources/js/background.js', 'public/js')
    .js('resources/js/popup.js', 'public/js').vue()
    .copy('resources/images/', 'public/images')
    .options({
        processCssUrls: false
    });