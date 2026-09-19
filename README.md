# EstateHub — Production-Style Real Estate Marketplace

A resume-ready MERN real-estate marketplace built with security and maintainability in mind.

## Features
- JWT authentication with HttpOnly cookies
- Role-based authorization (buyer, agent, admin)
- Ownership-level authorization for properties, profiles and transactions
- Property CRUD with image upload abstraction for Cloudinary
- Search, filters, sorting and pagination
- MongoDB geospatial-ready property model with 2dsphere index
- Preference-based property recommendations
- Razorpay payment service with server-side amount calculation and signature verification
- Socket.IO real-time chat with participant authorization
- Helmet, rate limiting, CORS allowlist and request validation
- Centralized error handling
- Swagger/OpenAPI documentation
- Jest + Supertest test setup

## Run locally
1. `cd server && npm install && cp .env.example .env`
2. Add MongoDB/JWT credentials to `.env`.
3. `npm run dev`
4. In another terminal: `cd client && npm install && npm run dev`

API docs: `http://localhost:5000/api/docs`
Health: `http://localhost:5000/api/health`

See `.env.example` for optional Cloudinary, Razorpay and SMTP settings.
