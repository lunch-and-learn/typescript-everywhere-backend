import { PrismaClient } from '@prisma/client'
import { RefinementSessionDTO } from 'lunch-learn-typescript-shared'

const prisma = new PrismaClient()

export const getAllRefinementSessions = async (): Promise<RefinementSessionDTO[]> => {
  return prisma.refinementSession.findMany({ include: { tickets: true } })
}

export const createSampleRefinementSession = async (): Promise<RefinementSessionDTO> => {
  const newSession = await prisma.refinementSession.create({ data: { code: `TESTCODE ${Math.random() * 10}`, deleted: false }, include: { tickets: true } })
  await prisma.ticket.create({ data: { jiraRef: 'TS-69420', refinementSession: { connect: { id: newSession.id } } } })
  return newSession
}
