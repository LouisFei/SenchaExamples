/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'MyApp.view.MyViewportViewModel',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],

    viewModel: {
        type: 'myviewport'
    },
    itemId: 'headerPanel',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 100,
            itemId: 'headerPanel',
            title: 'Header'
        },
        {
            xtype: 'treepanel',
            region: 'west',
            split: true,
            itemId: 'menuPanel',
            width: 231,
            title: 'Panel',
            store: 'MenuStore',
            viewConfig: {
                itemId: 'treeMenu'
            }
        },
        {
            xtype: 'panel',
            region: 'center',
            itemId: 'contentPanel',
            title: 'Content'
        }
    ]

});