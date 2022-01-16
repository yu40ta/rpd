FROM ruby:2.7.2

ENV APP_ROOT=/rpd \
    TZ=Asia/Tokyo

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y nodejs postgresql-client yarn imagemagick libpq-dev libvips-tools locales

RUN echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen ja_JP.UTF-8 && \
    /usr/sbin/update-locale LANG=ja_JP.UTF-8

WORKDIR $APP_ROOT
COPY ./Gemfile* ${APP_ROOT}

RUN bundle install -j4 --retry 3
COPY . ${APP_ROOT}

# COPY container/rails/entrypoint.sh /usr/bin/entrypoint.sh
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]

RUN yarn install

EXPOSE 3000
