FROM node:18-alpine

# Install curl for health check
RUN apk add --no-cache curl

WORKDIR /opt/xlsx2json

COPY . /opt/xlsx2json/

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

CMD [ "npm", "start" ]