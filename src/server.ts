import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { createSampleRefinementSession, getAllRefinementSessions } from './service/refinementSessionService'
import { APIResponse, RefinementSessionDTO } from 'lunch-learn-typescript-shared'

const app = express()

app.use(cors())

app.get('/refinementSessions', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refinementSessions = await getAllRefinementSessions()
    const response: APIResponse<RefinementSessionDTO[]> = {
      data: refinementSessions
    }
    res.json(response)
  } catch (err) {
    console.log(err)
    const response: APIResponse<null> = {
      data: null,
      error: 'Could not fetch refinement sessions'
    }
    res.status(400).json(response)
  }
})

app.post('/refinementSession', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refinementSession = await createSampleRefinementSession()
    res.json(refinementSession)
  } catch (err) {
    const response: APIResponse<null> = {
      data: null,
      error: 'Could not create sample refinement session'
    }
    res.status(400).json(response)
  }
})

app.listen(3000, () => {
  console.log('Backend listening on 3000')
})
