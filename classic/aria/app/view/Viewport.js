/*定义类*/
Ext.define('Aria.view.Viewport', {
    extend: 'Ext.container.Viewport',
    /*
    extend：用于继承。
    Ext.container.Viewport代表浏览器窗口的整个区域，
    将document body作为渲染对象，它会根据浏览器窗口的大小自动调整自身的尺寸，
    在一个页面中只允许出现一个Viewport实例。
    此外它没有提供对滚动条的支持，如果需要使用滚动条需要在其子面板中进行设置*/
    
    requires: [
        'Ext.Img',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.tab.Panel',
        'Ext.form.Panel'
    ],
    /*
    异步加载需要的功能
    */

    layout: 'border',
    /*border布局，将页面分成东，南，西，北，中五部分 */

    /*initComponent这个方法是在Ext.Component的构造函数(constructor)中调用的*/
    initComponent: function() {
        var me = this,
            num = 1;

        me.items = [
            {
                xtype: 'container',
                region: 'north', /*上北*/
                padding: '6 12',
                height: 40,
                
                ariaRole: 'banner',
                
                layout: {
                    align: 'stretch',
                    type: 'hbox'
                },
            
                items: [
                    {
                        xtype: 'image',
                        alt: 'Sencha logo',
                        src: 'resources/images/sencha-logo.png',
                        width: 19,
                        height: 28,
                        style: {
                            'margin-right': '10px'
                        }
                    }, 
                    {
                        xtype: 'component',
                        ariaRole: 'heading',
                        html: 'Ext JS Demo',
                        ariaAttributes: {
                            // Some screen readers will announce document contents upfront.
                            // In that case the region header component's html may be read
                            // twice: first as north container's aria-labelledby element,
                            // and then by itself as a div with a text node.
                            // The attribute below will instruct screen readers to skip
                            // the div text; it will be announced only as a region heading.
                            'aria-hidden': true
                        }
                    }, 
                    {
                        xtype: 'component',
                        flex: 3
                    }
                ]
            }, 
            {
                xtype: 'panel',
                region: 'west',/*左西*/
                
                title: '可折叠面板',
                collapsible: true,
                split: true,
                minWidth: 320,
                
                layout: {
                    type: 'accordion',
                    animate: true
                },
                
                tools: [{
                    type: 'pin',
                    tooltip: 'TODO:钉住面板'
                }, {
                    type: 'help',
                    tooltip: 'TODO:获得帮助'
                }],
                
                items: [
                    {
                        xtype: 'mysimplebuttons',
                        closable: true,
                        tools: [{
                            type: 'gear', //齿轮
                            tooltip: '设置'
                        }]
                    }, 
                    {
                        xtype: 'panel',
                        title: '可关闭的面板',
                        closable: true,
                        tools: [{
                            type: 'gear',
                            tooltip: 'Settings'
                        }],
                        html: '这只是一个简单的例子'
                    }, 
                    {
                        xtype: 'mysimpleform',
                        title: '表单例子',
                        closable: true,
                        tools: [{
                            type: 'gear',
                            tooltip: 'Settings'
                        }]
                    }
                ]
            }, 
            {
                xtype: 'tabpanel',
                title: 'Center tab panel',
                region: 'center',/*中间*/
                ariaRole: 'main',
                header: false,
                split: true,
                layout: 'fit',
                bodyStyle: 'background:white',
                defaults: {
                    padding: 1, //内边距
                    bodyStyle: 'background:white'
                },
                
                items: [
                    {
                        xtype: 'mysimplegrid'
                    }, 
                    {
                        xtype: 'mysimplepanel'
                    }, 
                    {
                        xtype: 'mysimplelist'
                    }, 
                    {
                        xtype: 'container',
                        title: '窗口',
                        items: [{
                            xtype: 'button',
                            text: '打开窗口',
                            handler: function() {
                                var win = this.up('container').add(Ext.widget('mysimplewindow', {
                                    title:'ARIA Window ' + num++
                                }));
                                
                                win.showBy(this, 'tr', [num*20, num*20]);
                            }
                        }]
                    }, 
                    {
                        xtype: 'mysimpleitemselector'
                    }, 
                    {
                        xtype: 'mysimpletoolbar'
                    }, 
                    {
                        xtype: 'mysimplewizard'
                    }, 
                    {
                        xtype: 'container',
                        title: '图片',
                        closable: true,
                        
                        items: [{
                            xtype: 'mysimpleimage'
                        }]
                    }
                ]
            }
        ];

        /*自定义类中的 initComponent　函数中必须调用 callParent();否则 调用者无法初始化这个对象*/
        me.callParent();
    }
});
