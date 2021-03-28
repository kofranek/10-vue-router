import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
import Mail from './views/Mail'
import AppEmailBody from './components/AppEmailBody'

// createMemoryHistory
// createWebHashHistory

export default createRouter({
                              history: createWebHistory(), // /
                              routes: [
                                { path: '/login', component: Login, alias: '/' }, // localhost:port/login
                                { path: '/forget', component: Forget },
                                { path: '/dashboard', component: Dashboard },
                                // { path: '/mail/:mailId?', component: Mail }
                                {
                                  path: '/mail', component: Mail, children: [
                                    { path: ':mailId?', component: AppEmailBody, props: true }
                                  ]
                                }

                              ],
                              linkActiveClass: 'active',
                              linkExactActiveClass: 'activw'
                            })