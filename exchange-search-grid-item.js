/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
import '../../@advanced-rest-client/arc-icons/arc-icons.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
import '../../@polymer/paper-styles/shadow.js';
import '../../@polymer/paper-button/paper-button.js';
import '../../@polymer/iron-icon/iron-icon.js';
import '../../@polymer/paper-item/paper-item.js';
import '../../@advanced-rest-client/star-rating/star-rating.js';
import {ExchangeSearchItemMixin} from './exchange-search-item-mixin.js';
/**
 * `<exchange-search-grid-item>` Displays a single grid item for Exchange
 * search rersults panel.
 *
 * ### Example
 *
 * ```html
 * <exchange-search-grid-item item="{...}" on-download="..."></exchange-search-grid-item>
 * ```
 *
 * ### Styling
 *
 * `<exchange-search-grid-item>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--exchange-search-grid-item` | Mixin applied to the element | `{}`
 * `--exchange-search-grid-item-action-button` | Mixin applied to the visible accrion button | `{}`
 * `--exchange-search-grid-item-card-background-color` | Background color of the card item | `#fff`
 * `--paper-rating-active-color` | Color of the rating icons when highlighted | `--accent-color`
 * `--paper-rating-inactive-color` | Color of the rating icons when not highlighted | `--disabled-text-color`
 * `--exchange-search-grid-item-tags-line` | Mixin applied to the tags container | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @appliesMixin ExchangeSearchItemMixin
 * @memberof UiElements
 */
class ExchangeSearchGridItem extends ExchangeSearchItemMixin(PolymerElement) {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
      @apply --arc-font-body1;
      @apply --shadow-elevation-4dp;
      color: var(--exchange-search-panel-item-card-color, inherit);
      background-color: var(--exchange-search-panel-item-background-color, #fff);
      @apply --exchange-search-grid-item;
    }

    h3 {
      @apply --paper-font-subhead;
      padding: 0;
      margin: 0;
      margin-left: 8px;
    }

    .title {
      @apply --layout-horizontal;
      @apply --layout-start;
    }

    .card {
      min-width: 140px;
      padding: 12px;
      height: 100%;
      box-sizing: border-box;
      @apply --layout-vertical;
    }

    .content {
      @apply --layout-flex;
    }

    .api-icon {
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      color: var(--raml-icon-color, #73cfee);
    }

    .open-button {
      @apply --exchange-search-grid-item-action-button;
    }

    .open-button:hover {
      @apply --exchange-search-grid-item-action-button-hover;
    }

    .creator {
      color: var(--exchange-search-list-item-author-color, rgba(0, 0, 0, 0.64));
    }

    .tags-line {
      max-height: 42px;
      text-overflow: ellipsis;
      overflow: hidden;
      @apply --exchange-search-grid-item-tags-line;
    }

    star-rating {
      --iron-icon-height: 20px;
      --iron-icon-width: 20px;
      display: inline-block;
    }
    </style>
    <div class="card">
      <section class="content">
        <div class="title">
          <iron-icon icon="[[_computeIconIcon(item)]]" class="api-icon" src="[[_computeIconSrc(item)]]"></iron-icon>
          <h3>[[item.name]]</h3>
        </div>
        <p class="creator">by [[item.organization.name]]</p>
        <template is="dom-if" if="[[hasTags]]">
          <p class="tags-line">
            <span class="tag-label">Tags:</span>
            <span class="tag-value">[[tags]]</span>
          </p>
        </template>
        <div class="rating">
          <star-rating rating="[[item.rating]]" read-only="" title\$="Api raiting: [[item.rating]]/5"></star-rating>
        </div>
      </section>
      <div class="actions">
        <paper-button noink="[[noink]]" on-tap="requestAction" class="open-button">[[actionLabel]]</paper-button>
      </div>
    </div>
`;
  }
}
window.customElements.define('exchange-search-grid-item', ExchangeSearchGridItem);