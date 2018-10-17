# Aria/app

This folder contains the javascript files for the application.
放置js文件

# Aria/resources

This folder contains static resources (typically an `"images"` folder as well).
放置静态资源文件

# Aria/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.
放置重写的代码文件

# Aria/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)
放置扩展的功能代码文件

# Aria/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Aria'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Aria/.sencha/app/sencha.cfg. 
样式

# Aria/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Aria'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Aria/.sencha/app/sencha.cfg. 
样式变量
