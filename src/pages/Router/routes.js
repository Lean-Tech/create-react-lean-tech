/**
 * Routes for the content routing used in ContentRouter component
 */
export const ContentRoutes = {
    Users: '/users',
    Test: '/test'
}

/**
 * Routes for the content routing used in PrincipalRouter component
 */
export const PrincipalRoutes = {
    Login: '/login',
    Register: '/register',
    CreateAccount: '/create-account',
    ForgotPassword: '/forgot-password',
    Account: '/account',
    Screens: '/'
}

/**
 * Account routes
 */
export const AccountRoutes = {
    Profile: '/account/profile',
    Preferences: '/account/preferences'
}

/**
 * Nav routes
 */
export const NavLinksPaths = {
    users: [
        {
            text: 'Users',
            label: 'user',
            path: '/user'
        },
        {
            text: 'Manage User',
            label: 'manageUser',
            path: '/user/manage'
        }
    ]
}
