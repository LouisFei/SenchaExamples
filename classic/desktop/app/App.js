/*!
 * Ext JS Library
 * Copyright(c) 2006-2014 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

Ext.define('Desktop.App', {
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox', //用于生成不同样式消息框的实用工具类。单例实例Ext.MessageBox别名Ext.Msg也可以使用。

        'Ext.ux.desktop.ShortcutModel', //为桌面快捷方式定义了最小化的字段集合。

        'Desktop.SystemStatus',
        'Desktop.VideoWindow',
        'Desktop.GridWindow',
        'Desktop.TabWindow',
        'Desktop.AccordionWindow',
        'Desktop.Notepad',
        'Desktop.BogusMenuModule',
        'Desktop.BogusModule',

        //'Desktop.Blockalanche',
        'Desktop.Settings'
    ],

    init: function() {
        // custom logic before getXYZ methods get called...

        this.callParent();

        // now ready...
    },

    getModules : function(){
        return [
            new Desktop.VideoWindow(),
            //new Desktop.Blockalanche(),
            new Desktop.SystemStatus(),
            new Desktop.GridWindow(),
            new Desktop.TabWindow(),
            new Desktop.AccordionWindow(),
            new Desktop.Notepad(),
            new Desktop.BogusMenuModule(),
            new Desktop.BogusModule()
        ];
    },

    getDesktopConfig: function () {
        var me = this, 
            ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                //{ text: 'Change Settings 修改设置', handler: me.onSettings, scope: me }
                { text: '修改设置', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                // fields: [
                //     { name: 'name', type: 'string' }
                // ],
                data: [
                    { name: '表格 窗口 演示', iconCls: 'grid-shortcut', module: 'grid-win' },
                    { name: 'Accordion Window', iconCls: 'accordion-shortcut', module: 'acc-win' },
                    { name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' },
                    { name: 'System Status', iconCls: 'cpu-shortcut', module: 'systemstatus'}
                ]
            }),

            wallpaper: 'resources/images/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, 
            ret = me.callParent();

        return Ext.apply(ret, {
            title: '拉扎尔·路飞',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        //text:'Settings',
                        text:'设置',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        //text:'Logout',
                        text:'退出',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
                // { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
                // { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
                { name: '可折叠窗口', iconCls: 'accordion', module: 'acc-win' },
                { name: '表格窗口', iconCls: 'icon-grid', module: 'grid-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        //Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
        Ext.Msg.confirm('退出', '你确定要退出系统吗？');
    },

    onSettings: function () {
        var dlg = new Desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
