# Cypress E2E Testing Project

## Project Description
This project contains End-to-End (E2E) tests for the Kewi website using Cypress.

It covers main user flows such as authentication, product browsing, cart actions, and API testing.

---

## How to Run the Project

1. Clone the repository:
git clone <https://github.com/RoaGhannam/cypressProject-kewiWebsite-RoaGhannam.git>

2. Install dependencies:
npm install

3. Open Cypress:
npx cypress open

OR run tests in headless mode:
npx cypress run

---

## Test Scenarios Covered

### Authentication
- Login with valid credentials
- Login with invalid credentials

### Products
- Open product categories
- View products

### Cart
- Add product to cart
- Delete product from cart
- Empty cart

### Data-Driven Testing
- Sign Up using fixture (signupData.json)
- Multiple test cases (valid & invalid data)

### API Testing
- Inspect API calls using cy.intercept
- Mock API responses using fixtures:
  - products
  - categories
  - empty products
  - sold out products

---

## Project Structure

cypress/
 ├── e2e/
 │   ├── dataTest.cy.js
 │   ├── deleteProduct.cy.js
 │   ├── openProductCategories.cy.js
 │   ├── testAPI.cy.js
 │   ├── userLogin.cy.js
 │   └── visitToHomePage.cy.js
 │
 ├── fixtures/
 │   ├── products.json
 │   ├── categories.json
 │   ├── emptyProducts.json
 │   ├── soldoutProduct.json
 │   └── signupData.json
 │
 ├── pageObject/
 ├── support/

---

## Tools & Technologies

- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- GitHub Actions (CI)

---

## Notes

- Data-driven testing is implemented using fixtures
- API mocking is done using cy.intercept
- Tests are organized using Page Object Model