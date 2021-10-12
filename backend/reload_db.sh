#!usr/bin/env bash
sudo -u postgres psql \
  -c "DROP DATABASE softeng;" \
  -c "CREATE DATABASE softeng;"
sudo -u postgres psql softeng < draft.v1.sql
