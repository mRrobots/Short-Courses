# DATABASE OVERVIEW 
![CircleCI](https://img.shields.io/circleci/build/github/Lindokuhle777/Short-Courses/main?style=plastic)
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)
![APM](https://img.shields.io/apm/v/npm)

### Tables on the database
We have 3 tables: USERS, COURSES and ENROLLED

#### USERS 
* USER_ID
* PASSWORD
* NAME

#### COURSES
* COURSE_ID
* NAME
* USER_ID
* DESCRIPTION 

#### ENROLLED 
* USER_ID
* MY_COURESES
