import { createExportDeclaration } from "typescript";
import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;

}

class Correction extends Entity<CorrectionProps> {
    private constructor (props: CorrectionProps, id?: string) {
        super(props, id)
    }

    public create(props: CorrectionProps, id?: string) {
        const correction = new Correction(props, id)

        return correction
    }
}