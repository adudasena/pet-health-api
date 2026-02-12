# PetHealth 🐾 | Full Stack Project

Aplicação para gerenciamento de saúde animal desenvolvida durante meus estudos de Spring Boot e React. O projeto simula o fluxo completo de uma clínica veterinária, desde a persistência de dados em um ambiente isolado até a interface do usuário.

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 21** & **Spring Boot 3**
- **Spring Data JPA** & **Hibernate**
- **PostgreSQL** (Banco de dados relacional)
- **Maven** (Gerenciador de dependências)

### Frontend
- **React** (Vite)
- **Tailwind CSS** (Estilização responsiva)
- **Axios** (Consumo de API REST)

### Infraestrutura
- **Docker** & **Docker Compose** (Containerização do banco de dados)

---

## 🛠️ Como rodar o projeto

### 1. Pré-requisitos
- Docker instalado
- JDK 21
- Node.js instalado

### 2. Configurando o Banco de Dados (Docker)
Na raiz do projeto, suba o container do PostgreSQL:
```bash
docker-compose up -d