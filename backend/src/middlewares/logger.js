const logger = (req, res, next) => {
    const fechaHora = new Date().toLocaleString();
    console.log(`[${req.method}] ${req.originalUrl} - ${fechaHora}`);
    next();
};

module.exports = logger;