FROM nginx/unit:1.23.0-php8.0
RUN mkdir -p /opt/code
COPY code /opt/code
COPY .thinkphp.unit.conf.json /docker-entrypoint.d/.thinkphp.unit.conf.json
CMD ["unitd", "--no-daemon", "--control", "unix:/var/run/control.unit.sock"]