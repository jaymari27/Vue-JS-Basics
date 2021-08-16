import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// Registering a router, which contains all URLs we want to support
const router = createRouter({
  // tells how browser remembers web history.
  history: createWebHistory(),
  //// the different URLs all stored inside an array
  // path = link of ur page
  // redirect = which component is going to be loaded
  routes: [
    /// These routes are same levels
    // redirecting "/" to "/teams"
    { path: '/', redirect: '/teams' },
    {
      // "name" is an identifier of routes
      name: 'teams',
      path: '/teams',
      // "meta" accepts any objects and can store data in there
      meta: { needsAuth: true },
      // Loading two components in one url
      components: { default: TeamsList, footer: TeamsFooter },
      /// Nested routes:
      // The routes will be appended to the parent route. This one below will be "/teams/:teamId"
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          // This tells the vue router that the dynamic parameters (:teamId) should be passed to the component (TeamMembers) as props, and not just on the $router property.
          props: true
        } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      // beforeEnter = since there is only one route
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    // For when the route is not in our specified routes. This should be placed last since it is the lowest priority, and might overwrite the other routes.
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  // scrollBehavior arguments: to, from, savedPosition
  // to and from are route objects, which are urls
  // savedPosition is only set when you press the back button. It is the url youve been to.
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    // if you have brwoser history, or youve been to a different page, it will be inside savedPosition. So in our if else condition, if we press Back, we will retain browser position.
    if (savedPosition) {
      return savedPosition;
    }
    // else, jump to top
    return { left: 0, top: 0 };
  }
});

// Navigation guards
router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    // next() will let the user proceed to the "to" url
    next();
  } else {
    next();
  }
});

// This will only run once a navigation has been confirmed (which is after beforeEach ig )
router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
