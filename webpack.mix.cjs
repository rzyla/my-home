const mix = require('laravel-mix');
//const del = import('del');

//del('public/js');
//del('public/css');

mix.copy('vendor/almasaeed2010/adminlte/plugins/jquery/jquery.min.js', 'public/js/admin/plugins/jquery.min.js');
mix.copy('vendor/almasaeed2010/adminlte/plugins/jquery-ui/jquery-ui.min.js', 'public/js/admin/plugins/jquery-ui.min.js');
mix.copy('vendor/almasaeed2010/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js', 'public/js/admin/plugins/bootstrap.bundle.min.js');
mix.copy('vendor/almasaeed2010/adminlte/dist/js/adminlte.js', 'public/js/admin/adminlte.js');
mix.copy('vendor/almasaeed2010/adminlte/plugins/fontawesome-free/*.*', 'public/css/admin/fontawesome-free');