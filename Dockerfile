FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build \
  && mkdir -p /out/costea-demo \
  && cp -r dist/. /out/costea-demo/ \
  && printf '%s\n' '<!DOCTYPE html><meta http-equiv="refresh" content="0;url=/costea-demo/">' > /out/index.html

FROM node:20-alpine
WORKDIR /app
ENV PORT=8080
COPY --from=build /out ./dist
COPY --from=build /app/package.json ./
RUN npm install --omit=dev serve
EXPOSE 8080
CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
