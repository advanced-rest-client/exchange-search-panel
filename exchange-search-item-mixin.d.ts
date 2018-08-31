/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   exchange-search-item-mixin.html
 */

/// <reference path="../polymer/types/lib/utils/mixin.d.ts" />

declare namespace ArcBehaviors {


  /**
   * A common properties and methods for exchange view list/grid items
   */
  function ExchangeSearchItemMixin<T extends new (...args: any[]) => {}>(base: T): T & ExchangeSearchItemMixinConstructor;

  interface ExchangeSearchItemMixinConstructor {
    new(...args: any[]): ExchangeSearchItemMixin;
  }

  interface ExchangeSearchItemMixin {

    /**
     * REST API index datastore object
     */
    item: object|null|undefined;

    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: boolean|null|undefined;

    /**
     * Computed value from `item` property.
     * List of tags to display.
     */
    readonly tags: any[]|null|undefined;

    /**
     * Computed value, true if the API item has tags.
     */
    readonly hasTags: boolean|null|undefined;

    /**
     * Main action button of an item.
     */
    actionLabel: string|null|undefined;

    /**
     * Computes tags label value form item's tags
     */
    _computeTags(record: any): any;

    /**
     * Computes `hasTags` property.
     */
    _computeHasTags(tags: any): any;

    /**
     * Computes value for `iron-icon` src property from current item.
     */
    _computeIconSrc(item: any): any;

    /**
     * Computes value for `iron-icon` icon property from current item.
     */
    _computeIconIcon(item: any): any;

    /**
     * Dispatches the `download` custom event to inform the panel
     * about user action.
     */
    requestAction(): void;
  }
}
