FROM shoppotest.azurecr.io/cherrypicks/nginx:1.11.1

MAINTAINER Rahul rui <rahulrui@ideaculture.com>

WORKDIR /app

COPY * /usr/local/nginx/html/

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/usr/local/nginx/sbin/nginx","-g","daemon off;","-c","/app/nginx/conf/nginx.conf"]