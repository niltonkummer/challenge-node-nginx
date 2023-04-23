FROM mysql:5.7

COPY ./create.sql /tmp

CMD [ "--innodb-use-native-aio=0", "--init-file=/tmp/create.sql" ]