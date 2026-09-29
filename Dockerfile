FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build \
  && mkdir -p /out/costea-demo \
  && cp -r dist/. /out/costea-demo/ \
  && cp serve.json /out/serve.json

FROM node:20-alpine
WORKDIR /app
ENV PORT=8080
COPY --from=build /out ./dist
COPY --from=build /app/package.json ./
RUN npm install --omit=dev serve
EXPOSE 8080
# Sin -s: sirve la carpeta anidada /costea-demo y usa serve.json
CMD ["npx", "serve", "dist", "-l", "8080", "-c", "dist/serve.json"]
