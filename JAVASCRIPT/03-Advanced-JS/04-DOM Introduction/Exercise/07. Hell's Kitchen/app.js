function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const textJSON = document.querySelector('textarea').value;

      const text = JSON.parse(textJSON);

      let bestRestauraunt = document.querySelector('#bestRestaurant > p');

      let bestWorkers = document.querySelector('#workers > p');

      let restaurants = {};

      for (let line of text) {

         let workers = [];

         let [restaurant, staff] = line.split(' - ');

         staff = staff.split(', ').forEach(token => {
            let [worker, salary] = token.split(" ");
            salary = Number(salary);
            workers.push({ worker, salary })
         })

         if (restaurants.hasOwnProperty(restaurant)) {

            workers = workers.concat(restaurants[restaurant].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);

         const bestSalary = workers[0].salary;

         let avgSalary = workers.reduce((a, x) => (a + x.salary), 0) / workers.length

         restaurants[restaurant] = {
            bestSalary,
            avgSalary,
            workers
         }
      }
      let sortedRestaurants = Object.keys(restaurants).sort((a, b) => restaurants[b].avgSalary - restaurants[a].avgSalary);

      let outputBestRestaurant = `Name: ${sortedRestaurants[0]} Average Salary: ${(restaurants[sortedRestaurants[0]].avgSalary).toFixed(2)} Best Salary: ${(restaurants[sortedRestaurants[0]].bestSalary).toFixed(2)}`

      bestRestauraunt.textContent = outputBestRestaurant;
    
      let outputWorkers = ""
      for(let object of restaurants[sortedRestaurants[0]].workers){
         outputWorkers += `Name: ${object['worker']} With Salary: ${object['salary']} `
      }

      bestWorkers.textContent = outputWorkers;
   }
}