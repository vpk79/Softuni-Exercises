const { expect } = require('chai');

const onlineStore = {
  isProductAvailable(product, stockQuantity) {
    if (typeof product !== "string" || typeof stockQuantity !== "number") {
      throw new Error("Invalid input.");
    }

    if (stockQuantity <= 0) {
      return `Sorry, ${product} is currently out of stock.`;
    } else {
      return `Great! ${product} is available for purchase.`;
    }
  },
  canAffordProduct(productPrice, accountBalance) {
    if (typeof productPrice !== "number" || typeof accountBalance !== "number") {
      throw new Error("Invalid input.");
    }

    let remainingBalance = accountBalance - productPrice;

    if (remainingBalance < 0) {
      return "You don't have sufficient funds to buy this product.";
    } else {
      return `Product purchased. Your remaining balance is $${remainingBalance}.`;
    }
  },
  getRecommendedProducts(productList, category) {
    let recommendedProducts = [];

    if (!Array.isArray(productList) || typeof category !== "string") {
      throw new Error("Invalid input.");
    }

    productList.forEach((product) => {
      if (product.category === category) {
        recommendedProducts.push(product.name);
      }
    });

    if (recommendedProducts.length === 0) {
      return `Sorry, we currently have no recommended products in the ${category} category.`;
    } else {
      return `Recommended products in the ${category} category: ${recommendedProducts.join(", ")}`;
    }
  },
};

module.exports = onlineStore;


describe('test onlineStore', function () {

  describe('test isProductAvailable', () => {

    it('should throw error with invalid input', () => {
      expect(() => onlineStore.isProductAvailable(0, 1)).to.throw("Invalid input.")
      expect(() => onlineStore.isProductAvailable('', '')).to.throw("Invalid input.")
      expect(() => onlineStore.isProductAvailable(0, '')).to.throw("Invalid input.")
    })

    it('should return expected answers with valid input', () => {
      expect(onlineStore.isProductAvailable('apples', 0)).to.equal(`Sorry, apples is currently out of stock.`)
      expect(onlineStore.isProductAvailable('apples', 1)).to.equal(`Great! apples is available for purchase.`)

    })

  })

  describe('test canAffordProduct', () => {

    it('should throw error with invalid input', () => {
      expect(() => onlineStore.canAffordProduct('', 1)).to.throw("Invalid input.")
      expect(() => onlineStore.canAffordProduct(1, '')).to.throw("Invalid input.")
      expect(() => onlineStore.canAffordProduct('', '')).to.throw("Invalid input.")

    })

    it('should return expected answers with valid input', () => {
      expect(onlineStore.canAffordProduct(15, 10)).to.equal("You don't have sufficient funds to buy this product.")
      expect(onlineStore.canAffordProduct(5, 10)).to.equal(`Product purchased. Your remaining balance is $5.`)
      expect(onlineStore.canAffordProduct(5, 5)).to.equal(`Product purchased. Your remaining balance is $0.`)
    })
  })

  describe('test getRecommendedProducts', () => {

    it('should throw error with invalid input', () => {
      expect(() => onlineStore.getRecommendedProducts('', '')).to.throw("Invalid input.")
      expect(() => onlineStore.getRecommendedProducts([], 1)).to.throw("Invalid input.")
      expect(() => onlineStore.getRecommendedProducts(1, 1)).to.throw("Invalid input.")
    })

    it('should return expected answers with valid input', () => {
      expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photography' }], 'Photography')).to.equal(`Recommended products in the Photography category: Camera`)
      expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photography' }], 'Puzzles')).to.equal(`Sorry, we currently have no recommended products in the Puzzles category.`)
    })
  })

})