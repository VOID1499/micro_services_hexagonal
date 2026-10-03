import { STATUS_CODE } from "./status-code.js";

class BaseError extends Error {

    public readonly name:string;
    public readonly status:number;
    public readonly message:string;

    constructor(name:string,status:number,description:string){
        super(description);
        this.name = name;
        this.status = status;
        this.message = description;
        Object.setPrototypeOf(this , new.target.prototype);
        Error.captureStackTrace(this)

    }

}


// 500 Internal server error
export class ApiError extends BaseError {
    constructor(description:string){
        super(
            description = "api error",
            STATUS_CODE.INTERNAL_ERROR,
            description
        )
    }
}

//400 validation error
export class ValidationError extends BaseError {

    constructor(description = "bad request"){
        super(
            "bad request",
            STATUS_CODE.BAD_REQUEST,
            description
        )
    }
}

// 403 Authorize error
export class AuthorizationError extends BaseError {

    constructor(description = "access denied"){
        super(
            "access denied",
            STATUS_CODE.UN_AUTHORISED,
            description
        )
    }
}

//404 Not FOudn Error

export class NotFoundError extends BaseError {

    constructor(description = "not found error"){
        super(
            description = "not found error",
            STATUS_CODE.NOT_FOUND,
            description
        )
    }

}
