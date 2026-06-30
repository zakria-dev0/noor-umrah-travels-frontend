# Noor Umrah Travels — Frontend

React + TypeScript frontend for the Noor Umrah Travels platform. Includes a public-facing website and a full admin dashboard.

---

## Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | React 19                          |
| Language     | TypeScript                        |
| Styling      | Tailwind CSS 3                    |
| Routing      | React Router DOM v7               |
| Notifications| react-hot-toast                   |
| Charts       | Recharts                          |
| Payments     | Affirm (JS SDK)                   |
| Fonts        | Inter (Google Fonts)              |

---

## Project Structure

```
src/
├── admin/
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── ContactModal.tsx
│   │   └── InquiryModal.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx         # Analytics, charts
│   │   ├── Login.tsx
│   │   ├── Profile.tsx           # Profile + Change Password
│   │   ├── Customers.tsx         # List + create + delete
│   │   ├── CustomerDetails.tsx   # Edit customer
│   │   ├── Quotes.tsx            # List + filter + search
│   │   ├── QuoteDetails.tsx      # Edit quote + email/WhatsApp
│   │   ├── CreateQuote.tsx
│   │   ├── Payments.tsx          # List + filter + search
│   │   ├── Contacts.tsx
│   │   └── Inquiries.tsx
│   └── services/
│       ├── api.ts                # apiFetch helper with auth token
│       ├── customerService.ts
│       ├── quoteService.ts
│       └── paymentService.ts
├── pages/
│   ├── PublicQuote.tsx           # Customer-facing quote + Affirm payment
│   ├── PaymentSuccess.tsx        # Post-payment confirmation
│   ├── PaymentCancel.tsx
│   └── ...                       # Public website pages
├── components/                   # Shared public-site components
└── App.tsx                       # Route definitions
```

---

## Getting Started

### 1. Clone & install

```bash
git clone <your-repo-url>
cd noor-umrah-travels-frontend
npm install
```

### 2. Create `.env`

Create a `.env` file in the root of this folder:

```env
# Backend API base URL
REACT_APP_API_URL=http://localhost:5001

# Affirm sandbox public key
REACT_APP_AFFIRM_PUBLIC_KEY=your_affirm_public_key
```

> **Important:** Never commit your `.env` file. Add it to `.gitignore`.

### 3. Run

```bash
npm start
```

App starts on `http://localhost:3000`.

---

## Admin Dashboard

Access the admin panel at `/admin/login`.

| Page             | Route                        | Description                              |
|------------------|------------------------------|------------------------------------------|
| Login            | `/admin/login`               | JWT-based admin login                    |
| Dashboard        | `/admin/dashboard`           | Revenue, quotes & payments analytics     |
| Customers        | `/admin/customers`           | List, create, delete customers           |
| Customer Details | `/admin/customers/:id`       | View & edit customer info                |
| Quotes           | `/admin/Quotes`              | List with status filters, copy link      |
| Quote Details    | `/admin/quotes/:id`          | View, edit, send email/WhatsApp          |
| Create Quote     | `/admin/quotes/create`       | Create a new quote for a customer        |
| Payments         | `/admin/Payments`            | List with revenue summary & filters      |
| Profile          | `/admin/profile`             | View profile & change password           |

### Authentication

- Admin login returns a JWT stored in `localStorage` as `adminToken`.
- All admin API calls include `Authorization: Bearer <token>`.
- `ProtectedRoute` redirects unauthenticated users to `/admin/login`.

---

## Payment Flow (Affirm)

1. Admin creates a quote and sends it to the customer via email or WhatsApp.
2. Customer opens the public quote link (`/quote/:quoteNumber`).
3. Customer clicks **Pay with Affirm** — Affirm modal opens.
4. On success, the frontend calls `/api/payment/affirm/authorize` to record the charge.
5. Customer is redirected to `/payment/success`.
6. If the customer opens the same link again, a **"Payment Already Completed"** screen is shown — no duplicate charges possible.

---

## Environment Notes

- **Affirm SDK** is loaded dynamically via a custom `useAffirmScript` hook. Use sandbox keys during development.
- **API URL** must match the backend port exactly (default `5001`).
- All admin pages require the backend to be running.
