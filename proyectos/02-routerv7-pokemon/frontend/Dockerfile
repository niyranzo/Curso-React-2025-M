# Imagen base de Node.js
FROM node:20

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos del frontend
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto (solo si usas Vite para desarrollo)
EXPOSE 5173

# Comando para servir la aplicación en producción
CMD ["npm", "start"]
