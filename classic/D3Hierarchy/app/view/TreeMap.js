/*
 * File: app/view/TreeMap.js
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

Ext.define('MyApp.view.TreeMap', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.treemap',

    requires: [
        'MyApp.view.TreeMapViewModel',
        'MyApp.view.TreeMapViewController',
        'Ext.tree.Panel',
        'Ext.tree.View',
        'Ext.toolbar.Toolbar',
        'Ext.button.Segmented',
        'Ext.button.Button',
        'Ext.d3.hierarchy.TreeMap',
        'Ext.d3.axis.Color'
    ],

    controller: 'treemap',
    viewModel: {
        type: 'treemap'
    },
    height: 600,
    width: 930,
    layout: 'border',

    items: [
        {
            xtype: 'treepanel',
            region: 'west',
            width: 230,
            collapsible: true,
            title: 'Companies',
            split: true,
            store: 'TreeMap',
            displayField: 'name',
            rootVisible: false,
            useArrows: true,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'segmentedbutton',
                            items: [
                                {
                                    enableToggle: true,
                                    pressed: true,
                                    text: 'Market Cap'
                                },
                                {
                                    text: 'Uniform'
                                }
                            ],
                            listeners: {
                                toggle: 'onSegmentedbuttonToggle'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            layout: 'fit',
            items: [
                {
                    xtype: 'd3-treemap',
                    nodeValue: function(node) {
                        return node.data.cap;
                    },
                    reference: 'treemap',
                    store: 'TreeMap',
                    rootVisible: false,
                    colorAxis: {
                        field: 'change',
                        scale: {
                            type: 'linear',
                            domain: [
                                -5,
                                0,
                                5
                            ],
                            range: [
                                '#E45649',
                                '#ECECEC',
                                '#50A14F'
                            ]
                        }
                    }
                }
            ]
        }
    ]

});