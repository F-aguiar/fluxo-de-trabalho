// src/middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log do erro no terminal
    res.status(err.status || 500).json({
      success: false,
      message: err.message || "Erro interno do servidor.",
    });
  };
  
  export default errorHandler;
  