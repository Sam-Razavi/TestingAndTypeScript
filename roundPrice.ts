export const roundPrice = (price: number, currency: string = 'SEK'): string => {
    const roundedPrice = Math.ceil(price * 100) / 100; // avrundning

    switch (currency) {
      case 'USD':
        return `$${roundedPrice.toFixed(2)}`;
      case 'EUR':
        return `€${roundedPrice.toFixed(2)}`;
      case 'GBP':
        return `£${roundedPrice.toFixed(2)}`;
      case 'SEK':
      default:
        return `${roundedPrice.toFixed(2)} ${currency}`;
    }
  };
