export class InternalServerError extends Error {
    
    constructor (description) {
        super();
        this.message = description;
        this.name = 'internal-service-error';
        this.code = 500;
    };
    
};
