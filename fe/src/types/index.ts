interface ICardProduct {
  image: string;
  title: string;
  subtitle?: string;
  seller: string;
  location: string;
  ability: {
    paymentOnSpot: boolean;
    purchaseInPerson: boolean;
  };
  productLoadingType: string;
  numberOfProducts: number;
  remainingProducts: number;
  price: number;
}
interface IFormAuth {
  name: string;
  lastName: string;
  email: string;
}

export { ICardProduct, IFormAuth };
