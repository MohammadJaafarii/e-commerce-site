# 🛒 E-Commerce Web Application

A full-stack e-commerce web application built with **ASP.NET Core Web API** (for backend) and **Angular** (for frontend).  
This project demonstrates essential e-commerce functionality such as browsing products, managing cart, and handling orders — all within a clean and responsive UI.

> 📌 This project was developed as a portfolio piece to showcase full-stack web development skills using modern technologies.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/Home-Page.png)

### 🛍️ Shop Page
![Shop Page](screenshots/Shop-Page.png)

### 📄 Product Details
![Product Details](screenshots/Product-Details.png)

---

## 🧰 Tech Stack & Tools

| Layer       | Technology                             |
|-------------|-----------------------------------------|
| Frontend    | Angular 17, Angular Material            |
| Backend     | ASP.NET Core 7 Web API                  |
| Database    | SQL Server + Entity Framework Core      |
| Routing     | Angular Router with **Lazy Loading**    |
| Dev Tools   | VS Code, Postman                        |

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js 18+](https://nodejs.org/)
- Angular CLI:
  ```bash
  npm install -g @angular/cli
  ```

---

### ▶️ Run Backend (ASP.NET Core API)

```bash
cd backend
dotnet restore
dotnet run
```

API will run at: `https://localhost:5001`

---

### ▶️ Run Frontend (Angular)

```bash
cd frontend
npm install
ng serve --open
```

App will open at: `http://localhost:4200`

