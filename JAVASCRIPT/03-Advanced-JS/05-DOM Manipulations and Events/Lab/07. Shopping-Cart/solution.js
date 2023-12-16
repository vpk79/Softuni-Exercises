function solve() {
   const addBtn = Array.from(document.getElementsByClassName('add-product'));
   const products = Array.from(document.getElementsByClassName('product-title'));
   const prices = Array.from(document.getElementsByClassName('product-line-price'));
   const checkout = document.getElementsByClassName('checkout')[0];
   let textArea = document.getElementsByTagName('textarea')[0];
   const allBtn = document.getElementsByTagName('button');


   let allProducts = {};
   let buyedProductsList = [];

   for (let btn of addBtn) {
      btn.addEventListener('click', () => {

         let btnIndex = addBtn.indexOf(btn);
         let item = products[btnIndex].textContent;
         let price = Number(prices[btnIndex].textContent);

         textArea.value += `Added ${item} for ${price.toFixed(2)} to the cart.\n`

         if (allProducts.hasOwnProperty(item)) {
            allProducts[item] += price;
         } else {
            allProducts[item] = price;
         }
      })

   }

   let sum = 0;

   checkout.addEventListener('click', () => {
      for (let item in allProducts) {
         buyedProductsList.push(item);
         sum += allProducts[item];
      }
      textArea.value += `You bought ${buyedProductsList.join(', ')} for ${sum.toFixed(2)}.`

      for(let btn of allBtn){
         btn.disabled = true;
      }
     
   })

}