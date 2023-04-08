# Property Manager

The target of the project is to create an application using ReactJS of the ***client-side***. 
For the backend has been created a remote service (https://github.com/ninovvas/property_management_app/tree/main/server) with [ExpressJS](https://expressjs.com/).

Property Manager is a SPA that manage my properties. 

The application contains following functionality:
- Home page (public area)
- Registration (Create a new user)
- LogIn
- Logout
- Dashboard with information about my properties, tenants and tenancies
    - Show a table of my properties
    - Show a table of my tenants
    - Show a table of my tenancies
    - Show total number of properties
    - Show total number of tenants
    - Show total number of tenancies
    - Show the monthly rent
    - Show if a property is free or rented

- Property:
    - Create a new property using multi step form
    - Edit a property
    - Details for each property
    - Delete property (if the property is not related to tenancy)
    - Validation and Error handling
- Tenant:
    - Create a new tenant
    - Edit a tenant
    - Details for each tenant
    - Delete tenant (if the tenant is not related to tenancy)
    - Validation and Error handling
- Tenancy:
    - Create a new tenancy (need the information from property and tenant)
    - Edit a tenancy
    - Details for each tenancy
    - Delete tenancy
    - Validation and Error handling

## Used UI Libraries

For the fronted has been used the UI libraries [Bootstrap 4.0 ](https://getbootstrap.com/docs/4.0/) and [Codedthemes](https://codedthemes.com/)