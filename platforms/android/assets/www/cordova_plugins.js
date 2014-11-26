cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.sqlite/www/SQLitePlugin.js",
        "id": "com.phonegap.plugins.sqlite.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/me.rahul.plugins.sqlDB/www/sqlDB.js",
        "id": "me.rahul.plugins.sqlDB.sqlDB",
        "clobbers": [
            "window.plugins.sqlDB"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.sqlite": "1.0.0",
    "me.rahul.plugins.sqlDB": "1.0.0"
}
// BOTTOM OF METADATA
});