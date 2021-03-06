/*
 * File: app/view/CascadingSelect.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CascadingSelect.view.CascadingSelect', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.cascadingselect',

    requires: [
        'CascadingSelect.view.CascadingSelectViewModel',
        'CascadingSelect.view.CascadingSelectViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    controller: 'cascadingselect',
    viewModel: {
        type: 'cascadingselect'
    },

    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },
    items: [
        {
            xtype: 'form',
            width: 500,
            bodyPadding: 10,
            title: '选择汽车',
            items: [
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    reference: 'makerField',
                    fieldLabel: '品牌',
                    labelAlign: 'right',
                    labelWidth: 70,
                    editable: false,
                    displayField: 'value',
                    valueField: 'id',
                    listeners: {
                        change: 'onMakerFieldChange'
                    }
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    reference: 'seriesField',
                    fieldLabel: '系列',
                    labelAlign: 'right',
                    labelWidth: 70,
                    editable: false,
                    displayField: 'value',
                    valueField: 'id',
                    listeners: {
                        change: 'onSeriesFieldChange'
                    }
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    reference: 'modelField',
                    fieldLabel: '型号',
                    labelAlign: 'right',
                    labelWidth: 70,
                    editable: false,
                    displayField: 'value',
                    valueField: 'id',
                    listeners: {
                        change: 'onModelFieldChange'
                    }
                },
                {
                    xtype: 'container',
                    margin: '10 0 10 0',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            reference: 'doneButton',
                            text: '选择',
                            listeners: {
                                click: 'onDoneButtonClick'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                render: 'onFormRender'
            }
        }
    ]

});