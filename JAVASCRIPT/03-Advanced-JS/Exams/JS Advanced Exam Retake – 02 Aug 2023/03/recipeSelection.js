const {expect} = require('chai');

const recipeSelection = {
    isTypeSuitable(type, dietaryRestriction) {
        if (typeof type !== "string" || typeof dietaryRestriction !== "string") {
            throw new Error("Invalid input");
        }
        if (dietaryRestriction === "Vegetarian" && type === "Meat") {
            return "This recipe is not suitable for vegetarians";
        } else if (dietaryRestriction === "Vegan" && (type === "Meat" || type === "Dairy")) {
            return "This recipe is not suitable for vegans";
        } else {
            return "This recipe is suitable for your dietary restriction";
        }
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number") {
            throw new Error("Invalid input");
        }

        let remainingBudget = budget - price;

        if (remainingBudget < 0) {
            return "You don't have enough budget to afford this recipe";
        } else {
            return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
        }
    },
    getRecipesByCategory(recipes, category) {
        if (!Array.isArray(recipes) || typeof category !== "string") {
            throw new Error("Invalid input");
        }

        const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
        return filteredRecipes.map((recipe) => recipe.title);
    },
};


module.exports = recipeSelection;

console.log(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Spicy Tofu Stir-Fry", category: " Asian2 " }, { title: " Spicy Tofu Stir-Fry ", category: " Asian3" }], 'Asian'))

describe('Recipe Selection Tests', function(){

    describe('Test group 1', () =>{

        it('to return isTypeSuitable msg "invalid input"', ()=>{

            expect(() => { recipeSelection.isTypeSuitable(1, 'a') }).to.throw("Invalid input")
            expect(() => { recipeSelection.isTypeSuitable('a', 1) }).to.throw("Invalid input")
            expect(() => { recipeSelection.isTypeSuitable(1, 1) }).to.throw("Invalid input")
            expect(() => { recipeSelection.isTypeSuitable('a', 'a') }).to.not.throw("Invalid input")
        })

        it('to return isTypeSuitable expected messages', ()=>{

            expect(recipeSelection.isTypeSuitable('a', 'a')).equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).equal("This recipe is not suitable for vegetarians");
            expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).equal("This recipe is not suitable for vegans");
            expect(recipeSelection.isTypeSuitable('Meat', 'a')).equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('a', 'Vegan')).equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable('Dairy', 'a')).equal("This recipe is suitable for your dietary restriction"); 
            expect(recipeSelection.isTypeSuitable('a', 'Vegetarian')).equal("This recipe is suitable for your dietary restriction");
        })

        it('to return isItAffordable msg "invalid input"', ()=>{
            expect(()=>{recipeSelection.isItAffordable('a', 'a')}).to.throw("Invalid input")
            expect(() => { recipeSelection.isItAffordable('a', 1) }).to.throw("Invalid input")
            expect(() => { recipeSelection.isItAffordable(1, 'a') }).to.throw("Invalid input")
            expect(() => { recipeSelection.isItAffordable(1, 1) }).to.not.throw("Invalid input")
        })

        it('to return property messages', ()=>{
            expect(recipeSelection.isItAffordable(10, 5)).equal("You don't have enough budget to afford this recipe")
            expect(recipeSelection.isItAffordable(5, 10)).equal(`Recipe ingredients bought. You have 5$ left`)
            expect(recipeSelection.isItAffordable(5, 5)).equal(`Recipe ingredients bought. You have 0$ left`)
        })

        it('getRecipesByCategory to return error', ()=>{
            expect(() => { recipeSelection.getRecipesByCategory('a', 1) }).to.throw("Invalid input")
            expect(() => { recipeSelection.getRecipesByCategory([], 1) }).to.throw("Invalid input")
            expect(() => { recipeSelection.getRecipesByCategory('a', 'a') }).to.throw("Invalid input")
            expect(() => { recipeSelection.getRecipesByCategory([], 'a') }).to.not.throw("Invalid input")
        })

        it('must return array with recipes', ()=>{
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Spicy Tofu Stir-Fry", category: " Asian2 " },
                { title: " Spicy Tofu Stir-Fry ", category: " Asian3" }], 'Asian')).to.deep.equal(['Spicy Tofu Stir-Fry'])
        })

        it('must return array with recipes', () => {
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Spicy Tofu Stir-Fry", category: " Asian2 " },
            { title: " Spicy Tofu Stir-Fry ", category: " Asian3" }], 'Asian')).to.instanceOf(Array)
        })
    })
})