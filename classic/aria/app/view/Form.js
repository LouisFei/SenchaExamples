Ext.define('Aria.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysimpleform',
    
    requires: [
        'Ext.form.field.Display',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Date',
        'Ext.form.field.Time',
        'Ext.slider.Single',
        'Ext.form.CheckboxGroup',
        'Ext.form.RadioGroup',
        'Ext.form.FieldSet',
        'Ext.data.ArrayStore',
        'Ext.button.Button'
    ],
    
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 80,
        margin: '0 0 6 0'
    },
    
    width: 320,
    bodyPadding: 12,
    scrollable: true,
    
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            height: 30,
            items: [
                {
                    xtype: 'button',
                    text: 'Submit 提交',
                    handler: function(btn) {
                        var form, data;
                        
                        form = btn.up('form');
                        data = form.getForm().getValues();
                        
                        Ext.Msg.alert(
                            '表单提交',
                            '表单数据:<br><br>' + Ext.JSON.encode(data).replace(/(["\]])\,/g, '$1,<br>')
                        );
                    }
                }, 
                {
                    xtype: 'button',
                    text: 'Cancel 取消',
                    handler: function() {
                        Aria.app.msg('Notice', 'You have clicked Cancel button');
                    }
                }
            ]
        }
    ],
    
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '只读文本',
            value: '只读文本'
        }, 
        {
            xtype: 'textfield',
            fieldLabel: '输入框',
            name: 'name',
            allowBlank: false
        }, 
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        }, 
        {
            xtype: 'combobox',
            fieldLabel: 'Company',
            name: 'company',
            store: {
                proxy: {
                    type: 'memory',
                    reader: 'array'
                },
                fields: [
                    'company', 'abbr'
                ],
                data: [
                    ['微软','微软'],
                    ['Apple Inc.', 'AAPL'],
                    ['Cisco System Inc.', 'CSCO'],
                    ['Google Inc.', 'GOOG'],
                    ['Intel Corporation', 'INTC'],
                    ['Level 3 Communications, Inc.'],
                    ['Microsoft Corporation', 'MSFT'],
                    ['Nokia Corporation', 'NOK'],
                    ['Oracle Corporation', 'ORCL'],
                    ['Starbucks Corporation', 'SBUX'],
                    ['Yahoo INc.', 'YHOO']
                ]
            },
            queryMode: 'local',
            displayField: 'company',
            valueField: 'company',
            allowBlank: false
        }, 
        {
            xtype: 'datefield',
            fieldLabel: '出生日期',
            name: 'birthdate',
            submitFormat: 'Y-m-d'
        }, 
        {
            xtype: 'timefield',
            fieldLabel: '时间',
            name: 'time',
            submitFormat: 'H:M:S'
        }, 
        {
            xtype: 'sliderfield',
            fieldLabel: '尺寸',
            name: 'size',
            value: 80,
            width: 250
        }, 
        {
            xtype: 'checkboxgroup',
            fieldLabel: '音乐',
            defaultType: 'checkboxfield',
            columns: 2,
            vertical: false,
            items: [
                {
                    boxLabel: '古典',
                    name: 'classical',
                    inputValue: '1',
                    id: 'checkbox1'
                }, 
                {
                    boxLabel: '摇滚',
                    name: 'rock',
                    inputValue: '2',
                    checked: true,
                    id: 'checkbox2',
                    required: true
                }, 
                {
                    boxLabel: '蓝调',
                    name: 'blues',
                    inputValue: '3',
                    id: 'checkbox3'
                }
            ]
        }, 
        {
            xtype: 'radiogroup',
            fieldLabel: '颜色',
            // Arrange radio buttons into two columns, distributed vertically
            columns: 2,
            vertical: false,
            items: [
                    {
                    boxLabel: '红色',
                    name: 'color',
                    inputValue: '1'
                }, 
                {
                    boxLabel: '蓝色',
                    name: 'color',
                    inputValue: '2',
                    checked: true
                }
            ]
        }, 
        {
            xtype: 'fieldset',
            title: '描述',
            collapsible: true,
            columnWidth: 0.5,
            layout: 'anchor',
            items: [
                {
                    xtype: 'textarea',
                    fieldLabel: '注释',
                    name: 'description'
                }, 
                {
                    xtype: 'numberfield',
                    fieldLabel: '持续时间',
                    name: 'duration',
                    step: 10,
                    maxLength: 100,
                    minLength: 0,
                    minValue: 10,
                    maxValue: 100,
                    value: 50
                }
            ]
        }, 
        {
            xtype: 'fieldset',
            title: '个人信息',
            columnWidth: 0.5,
            checkboxToggle: true,
            layout: 'anchor',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    name: 'firstname'
                }, 
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    name: 'lastname'
                }, 
                {
                    xtype: 'textfield',
                    fieldLabel: 'Company Name',
                    name: 'company'
                }
            ]
        }
    ]
});
