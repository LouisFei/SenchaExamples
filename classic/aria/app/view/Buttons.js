Ext.define('Aria.view.Buttons', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mysimplebuttons',
    
    requires: [
        'Ext.container.ButtonGroup'
    ],
    
    title: 'Buttons 按钮',
    
    defaults: {
        margin: 6
    },

    layout: 'vbox',
    defaultType: 'button',
    
    items: [{
        xtype: 'buttongroup',
        title: 'Button group 按钮组',
        columns: 2, //两列
        
        items: [
            {
                text: '点击我',
                handler: function() {
                    Aria.app.msg('按钮点击', '你点击了按钮 "{0}" .', this.text);
                }
            }, 
            {
                text: '开关',
                enableToggle: true
            }, 

            {
                text: '普通菜单项',
                menu: {
                    items: [
                        { text: 'Item 1' },
                        {
                            text: 'Item 2',
                            menu: {
                                plain: true,
                            
                                defaults: {
                                    plain: true
                                },
                            
                                items: [
                                    { text: 'Plain item 1' },
                                    { text: 'Plain item 2' },
                                    { text: 'Plain item 3' }
                                ]
                            }
                        },
                        { text: 'Item 3' }
                    ]
                }
            }, 

            {
                text: '带复选框的菜单项',
                menu: {
                    defaults: {
                        xtype: 'menucheckitem'
                    },
                
                    items: [
                        { text: 'Check item 1' },
                        {
                            text: 'Check item 2',
                            menu: {
                                defaults: {
                                    xtype: 'menucheckitem'
                                },
                            
                                items: [
                                    { text: 'Check sub-item 1' },
                                    { text: 'Check sub-item 2' },
                                    { text: 'Check sub-item 3' }
                                ]
                            }
                        },
                        { text: 'Check item 3' }
                    ]
                }
            }
        ]
    }]
});
