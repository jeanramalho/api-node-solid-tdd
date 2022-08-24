import { CreateChallengeSubmission } from "./create-challenge-submission"
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository"

describe('Create challenge submission use case', () => {
    it('shold be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository()
        const sut = new CreateChallengeSubmission()

        const response = await sut.execute({
            studentId: 'fake-student-id',
            challengeId: 'fake-challenge-id'
        })

        expect(response).toBeTruthy()
    })
})