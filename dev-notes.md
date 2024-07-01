### Summary

This merge request introduces several features and improvements, including the creation of a collection page with pagination and sorting capabilities, the addition of a Create Card form, and various enhancements to the overall user experience. Below is a detailed explanation of the changes made:

### Features and Enhancements

1. **Collection Page Implementation**:
   - Created a `CollectionContainer` component to display a list of player cards.
   - Integrated pagination to navigate through the player cards.
   - Implemented sorting functionality to sort player cards by different fields (firstname, lastname, team, birthday).
   - Added error handling and loading states using `react-query` and custom toast notifications.

2. **Create Card Form**:
   - Developed a `CreateCard` component to allow users to create new player cards.
   - Utilized `react-hook-form` for form handling and validation.
   - Implemented an autocomplete search for player names using a proxy server to fetch data from the Fotmob API.
   - Added client-side validation to ensure all required fields are filled and display appropriate error messages.
   - Checked for existing players to avoid duplicates using `react-query` and displayed a toast notification if the player already exists.
   - Used `axios` instances for API calls and centralized error handling.

3. **Reusable Components**:
   - Created reusable `Autocomplete`, `Input`, and `Pagination` components.
   - Enhanced the `Autocomplete` component to fetch and display player suggestions from the Fotmob API.
   - Developed a dynamic `Select` component for sorting options.
   - Implemented a reusable `Button` component with different variants (primary, secondary, outline) supporting dark/light mode.

4. **Theming and Styling**:
   - Utilized `styled-components` for CSS-in-JS styling.
   - Ensured all components support both dark and light modes.
   - Centralized theme definitions in `theme.ts` for consistent styling across the application.
   - Created a global toast notification component for displaying success, error, warning, and info messages.

5. **Custom Hooks**:
   - Implemented a custom `useDebounce` hook to handle debounced search input in the autocomplete component.
   - Created a `useFotmobSearch` hook to fetch player search results from the Fotmob API.
   - Developed a `useOnClickOutside` hook to handle clicks outside the autocomplete suggestions.

### Detailed Implementation

1. **CollectionContainer Component**:
   - Utilized `useQuery` from `react-query` to fetch player data.
   - Implemented sorting options dynamically based on player fields.
   - Integrated the reusable `Pagination` component to handle page navigation.
   - Displayed loader and error messages using custom toast notifications.

2. **CreateCard Component**:
   - Used `useForm` from `react-hook-form` for form handling.
   - Implemented player selection using the `Autocomplete` component.
   - Fetched player details from the Fotmob API using the `usePlayerDetails` hook.
   - Validated form fields and checked for existing players before submission.
   - Displayed appropriate success and error messages using custom toast notifications.

3. **Reusable Components**:
   - **Autocomplete Component**:
     - Fetched player suggestions from the Fotmob API.
     - Displayed suggestions with lazy-loaded player images.
     - Handled click outside the suggestions to hide the dropdown.
   - **Input Component**:
     - Supported different input types and read-only fields.
     - Applied consistent styling across the application.
   - **Pagination Component**:
     - Managed page navigation with previous and next buttons.
     - Displayed the current page number and total pages.

4. **Theming and Styling**:
   - Defined light and dark themes in `theme.ts`.
   - Applied consistent styles using `styled-components`.
   - Ensured all components adapt to the selected theme.

5. **Custom Hooks**:
   - **useDebounce**:
     - Handled debounced search input to reduce API calls.
   - **useFotmobSearch**:
     - Fetched player search results from the Fotmob API based on debounced input.
   - **useOnClickOutside**:
     - Managed click events outside the autocomplete suggestions to hide the dropdown.

### How to Test

1. **Run the Application**:
   - Start the frontend server: `npm run start:front`.
   - Start the backend server: `npm run start:back (also starts the proxy server)`.

2. **Test the Collection Page**:
   - Navigate to `/collection`.
   - Verify pagination and sorting functionalities.
   - Check for appropriate error and loading states.

3. **Test the Create Card Form**:
   - Navigate to `/create-card`.
   - Search for a player using the autocomplete field.
   - Verify that player details are fetched and populated in the form.
   - Attempt to create a new player and check for success and error notifications.

### Notes

- Ensure environment variables for backend and Fotmob API URLs are correctly set in `.env` file.
- Test the application in both dark and light modes to ensure consistent styling.

---
Thank you!

---
