import { configureStore } from '@reduxjs/toolkit'

// Reducers
import AuthReducer from '../reducers/auth'
import ConfigReducer from '../reducers/configs'
import pageReducer from '../reducers/components/pages'

import rightSidebarReducer from '../reducers/components/overlays/sidebar/right'
import leftSidebarReducer  from '../reducers/components/overlays/sidebar/left'
import modalReducer from '../reducers/components/overlays/dialog/modal'
import dialogConfirmReducer from '../reducers/components/overlays/dialog/confirm'
import toastReducer from '../reducers/components/overlays/toast'

import editReducer from '../reducers/components/pages/edit'

export default configureStore({
  reducer: {
    ConfigController: ConfigReducer,
    AuthController: AuthReducer,
    pageView: pageReducer,
    rightSidebarView: rightSidebarReducer,
    leftSidebarView: leftSidebarReducer,
    modalView: modalReducer,
    dialogConfirmView: dialogConfirmReducer,
    toastView: toastReducer,
    editController: editReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),  
})