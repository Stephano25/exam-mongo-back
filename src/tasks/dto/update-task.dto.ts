export class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: 'EN_COURS' | 'TERMINEE';
}