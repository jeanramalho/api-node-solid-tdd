import { Submission } from "../../domain/entities/submission";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private studentsRepositpry: StudentsRepository
    ) {}

    async execute({studentId, challengeId} : CreateChallengeSubmissionRequest) {
        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission
    }
}