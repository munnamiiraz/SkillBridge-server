import { Prisma } from "../generated/prisma/client";
function errorHandler(err, req, res, next) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorDetails = err;
    // PrismaClientValidationError
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        errorMessage = "Validation Error: " + err.message.split('\n').filter(line => line.trim()).pop() || err.message;
    }
    // PrismaClientKnownRequestError
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        statusCode = 400;
        if (err.code === "P2025") {
            errorMessage = "Record not found.";
        }
        else if (err.code === "P2002") {
            errorMessage = "A record with this value already exists.";
        }
        else if (err.code === "P2003") {
            errorMessage = "Foreign key constraint failed.";
        }
        else {
            errorMessage = err.message;
        }
    }
    else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = 500;
        errorMessage = "Database query failed.";
    }
    else if (err instanceof Prisma.PrismaClientInitializationError) {
        statusCode = 500;
        errorMessage = "Database connection failed.";
    }
    else if (err instanceof Error) {
        // Handle generic errors (like "Booking not found", "Cancel window expired")
        statusCode = 400;
        errorMessage = err.message;
    }
    console.error(`[Error] ${statusCode} - ${errorMessage}`);
    if (statusCode === 500) {
        console.error(err);
    }
    res.status(statusCode).json({
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? err : undefined
    });
}
export default errorHandler;
//# sourceMappingURL=globalErrorHandler.js.map