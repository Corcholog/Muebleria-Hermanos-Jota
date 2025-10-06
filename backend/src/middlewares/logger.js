// Middleware para registrar método, URL y fecha/hora del request
const logger = (req, res, next) => {
    try {
        const fechaHora = new Date().toLocaleString();
        console.log(`[${req.method}] ${req.originalUrl} - ${fechaHora}`);
    } catch (error) {
        console.error('Error en logger:', error);
    } finally {
        next();
    }
};

module.exports = logger;
