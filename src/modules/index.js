/**
 * Created by SHENJO on 8/25/2017.
 */
import Router from '../router'
import coreRoute from './core/router/core.client.route'
import todoRoute from './todo/router/todo.client.route'
import authRoute from './auth/router/auth.client.route'

import Store from '../store'
import coreStore from './core/store/core.client.store'
import todoStore from './todo/store/todo.client.store'
import authStore from './auth/store/auth.client.store'
Router.addRoutes(coreRoute);
Router.addRoutes(todoRoute);
Router.addRoutes(authRoute);
Store.registerModule('core', coreStore);
Store.registerModule('todo', todoStore);
Store.registerModule('auth', authStore);

