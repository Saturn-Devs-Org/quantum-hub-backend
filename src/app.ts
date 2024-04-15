import express, { Request, Response } from 'express'
import UserRouter from './routes/userRoutes'
import AuthRouter from './routes/authRoutes'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Quantum Hub Backend' })
})

// Routes definition
app.use('/user', UserRouter)
app.use('/auth', AuthRouter)


const PORT = 3000

app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: http://localhost:${PORT}`)
)
