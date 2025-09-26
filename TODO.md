# Task: Make vendor page scroll up when refreshed

## Steps to Complete

- [x] Implement global ScrollToTop component to handle scroll on route changes
- [x] Integrate ScrollToTop in App.jsx
- [x] Remove page-specific scroll logic from VendorRegistrationPage.jsx
- [ ] Test the functionality by refreshing the page

## Changes Made

- **Created `src/components/ScrollToTop/ScrollToTop.jsx`**:
  - New component that scrolls to top on every route change using useLocation hook
- **Modified `src/App.jsx`**:
  - Imported and added `ScrollToTop` inside the Router for global scroll behavior
- **Modified `src/pages/VendorRegistration/VendorRegistrationPage.jsx`**:
  - Removed the page-specific `window.scrollTo(0, 0)` as it's now handled globally

## Testing Status

- [ ] Functionality tested: Page scrolls to top on refresh

## Summary

The vendor registration page (and all pages) will now automatically scroll to the top on every route change, including refreshes, providing a consistent user experience across the application.
