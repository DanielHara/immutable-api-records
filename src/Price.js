import {Record} from 'immutable'

const PriceRecord = new Record({
  amount: '',
  currency: '',
  taxModel: 'GROSS'
})
export default class Price extends PriceRecord {
  // TODO This is just a Krücke and does not belong here. Formatting of prices is language configuration dependend
  // and hence belongs into the presentation layer, not the model layer. This is just to reduce rebasing issues.
  get formatted () {
    return typeof this.amount === 'number'
      ? `${this.currency} ${this.amount.toFixed(2)}`
      : this.amount
  }
}
