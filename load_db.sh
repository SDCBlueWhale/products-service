#!/bin/bash
export PGPASSWORD=dumb1234
psql -U pd -d sdc -p 5432 -h db -f /data/load_db.sql