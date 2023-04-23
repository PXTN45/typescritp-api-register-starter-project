import express, { Router } from 'express'
import authRouter from './authRouter'
import userRounter from './userRounter'

const router = Router()

export default (): Router => {
    authRouter(router)
    userRounter(router)
    return router
}