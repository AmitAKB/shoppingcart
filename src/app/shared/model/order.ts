export class Order {
  datePlaced: number;
  constructor(
    public userId: string,
    public shipping: any,
    public shoppingcart: any,
    public totalPrice: number,
    public count: number
  ) {
    this.datePlaced = new Date().getTime();
  }
}
