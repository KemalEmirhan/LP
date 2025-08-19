# Enpal Landing Page

A modern, responsive landing page built with Next.js 15, React 19, and TypeScript for Enpal's solar-powered heating solutions. This project features a clean, minimalist design with smooth animations and a comprehensive signup form system.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Interactive Components**: Smooth scroll animations and intersection observer effects
- **Form Validation**: Comprehensive client and server-side validation
- **Signup ID System**: Secure form submission with unique signup identifiers
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Optimized images and efficient rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **UI Library**: React 19.1.0
- **Styling**: TailwindCSS 4
- **Language**: TypeScript 5
- **State Management**: SWR for data fetching
- **Animations**: React Intersection Observer
- **Font**: Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd enpal-landing-page
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
enpal-landing-page/
├── app/                    # Next.js App Router
│   ├── api/signup/        # API endpoint for form submission
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main landing page
├── components/            # Reusable UI components
│   ├── BrandTrust/       # Trust indicators section
│   ├── Footer/           # Footer component
│   ├── Form/             # Signup form component
│   ├── GetStarted/       # Call-to-action section
│   ├── Hero/             # Hero section
│   ├── Navbar/           # Navigation component
│   └── WhyThisPackage/   # Benefits section
├── public/               # Static assets
│   └── images/           # Image assets
├── styles/               # Global styles
├── utils/                # Utility functions
│   └── Server/           # Server-side utilities
└── constants.ts          # Application constants
```

## 🔑 SignUpId System

The application implements a secure signup system using unique `signUpId` parameters. Here's how it works:

### How to Use SignUpId

1. **URL Parameter**: The signup form expects a `signUpId` parameter in the URL:
   ```
   https://your-domain.com?signUpId=unique-identifier-123
   ```

2. **Form Integration**: The `signUpId` is automatically captured from the URL and included in form submissions.

3. **Validation**: The API endpoint validates that a `signUpId` is present before processing the form:
   ```typescript
   if (!signupId || signupId.trim() === '') {
     return NextResponse.json(
       { status: "error", message: "This signup ID is required for form submission. Please ensure you have a valid signup link." },
       { status: 400 }
     );
   }
   ```

### Implementation Details

- **Automatic Capture**: The form component uses `useSearchParams()` to extract the `signUpId` from the URL
- **Form State**: The `signUpId` is stored in the form state and sent with every submission
- **Error Handling**: Clear error messages guide users when the `signUpId` is missing
- **Security**: The system ensures all form submissions are tied to valid signup links

### Example Usage

```typescript
// URL: https://enpal.com?signUpId=campaign-2024-001
const searchParams = useSearchParams();
const signupId = searchParams.get('signUpId'); // Returns "campaign-2024-001"
```

## 📝 API Endpoints

### POST /api/signup

Handles form submissions with the following structure:

**Request Body:**
```typescript
{
  name: string;      // Required
  surname: string;   // Required
  email: string;     // Required (must be valid email)
  signupId: string;  // Required (from URL parameter)
}
```

**Response:**
```typescript
{
  status: "success" | "error";
  data?: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
}
```

## 🎨 Components

### Core Components

- **Navbar**: Responsive navigation with CTA button that appears on scroll
- **Hero**: Main landing section with compelling headline and imagery
- **WhyThisPackage**: Benefits and features section
- **BrandTrust**: Social proof and trust indicators
- **GetStarted**: Call-to-action section
- **Form**: Comprehensive signup form with validation
- **Footer**: Site footer with links and information

### Component Features

- **Intersection Observer**: Smooth animations triggered by scroll
- **Form Validation**: Real-time validation with error handling
- **Loading States**: Visual feedback during form submission
- **Success States**: Confirmation messages after successful submission
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### Build for Production

```bash
yarn build
yarn start
```

### Environment Variables

No environment variables are currently required, but you may want to add:
- `NEXT_PUBLIC_API_URL` for production API endpoints
- `NEXT_PUBLIC_ANALYTICS_ID` for analytics tracking

## 🔧 Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Code Style

- TypeScript for type safety
- TailwindCSS for styling
- Functional components with hooks
- Early returns for better readability
- Descriptive variable and function names
- Accessibility-first approach

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: Default (320px+)
- Tablet: `sm:` (640px+)
- Desktop: `lg:` (1024px+)
