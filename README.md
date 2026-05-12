# Cypress E2E Testing Project – Kewi Website

## 📌 Project Overview

This project is an individual Cypress testing task for the website:
https://kewi.ps

The goal of this project is to build a complete end-to-end (E2E) test suite for a real e-commerce website and apply intermediate Cypress concepts such as reusable code, structured tests, data-driven testing, and API testing.

---

## 🎯 What I Implemented

### 🏠 1. Homepage Testing
- Visited the homepage
- Verified that key sections are displayed:
  - Banners
  - Categories
  - Featured products

---

### 🛍️ 2. Product Browsing
- Navigated to the "Products" page
- Opened a specific category (e.g., Kéwi bags)
- Opened a product details page

---

### 🛒 3. Cart Functionality
- Added a product to the cart
- Opened the cart
- Deleted a product from the cart
- Verified empty cart scenario

---

### 🔐 4. Login Testing
- Tested login with valid credentials → successful login
- Tested login with invalid credentials → error handling

---

### 🧪 5. Project Structure (POM)
- Used Page Object Model (POM)
- Separated:
  - Actions
  - Assertions
- Organized tests into reusable modules

---

### ⚙️ 6. Custom Commands
- Created custom commands (e.g., login, add to cart)
- Improved code reusability and readability

---

### 📊 7. Data-Driven Testing
- Used fixtures (`signupData.json`)
- Tested multiple cases (valid & invalid inputs)
- Implemented one data-driven test

---

### 🔌 8. API Testing (cy.intercept)
- Used `cy.intercept` to:
  - Inspect API requests
  - Mock API responses
- Tested scenarios like:
  - Products list
  - Categories
  - Empty data
  - Sold-out products

---

### 🚀 9. CI/CD (GitHub Actions)
- Configured GitHub Actions workflow
- Tests run automatically on push
- Ensured continuous testing

---

## 🧰 Tools Used

- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- cy.intercept (API testing)
- GitHub Actions

---

## ✅ Conclusion

In this project, I implemented a complete Cypress testing solution that includes UI testing, API testing, and data-driven testing.

The tests are structured, reusable, and maintainable, following best practices.

## 🎥 Project Demo

A full walkthrough of the project, including code explanation and test execution:

▶️ 