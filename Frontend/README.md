# PlantifyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# M326_Plantify
This is the official second repository for the M326 Plantify

[Jira Plantify Link](https://plantify.atlassian.net/jira/software/projects/PLAN/boards/1)

**Frontend Team:**
- Benjaming Harlacher
- Noah Barth 

**Backend Team:**
- Paul Alibisetti
- Stefan Arsic
- Leon Domiter

Keep in mind, the Teams are not fixed, meaning that Frontend and Backend can change members.

---
## Rules and Conventions
In this section all rules will be listed and explained.

---
### Jira Usage
For this module we use Jira and Scrum to learn about agile project management, for this reason we have to keep order on how to use Jira correctly.

We currently have 3 Ticket types, Epic, User Story and Task/Subtask, only Task/Subtask are to be edited and added.

Our convention for tasks are:

**1. Short but descriptive title**
You should be able to quickly understand what the task is associated with and what new function/use is going to be implemented.

**2. Short description**
A ticket should have a description that only includes information that is needed and no further information that only increase the time to read without gaining further information.

**3. Link to a PR**
For easy navitgation through Jira and Git we need to add a way, that is either using Jiras build in Github integration or just adding the PR link at the end of the ticket

E.G
Pull Request: LINK_PULLREQUEST

**4. Dependencies**
While working on a ticket people might have to wait for another, for example you need to display data but you can't do that because another member of the team is not finished with the function. 

With a list of dependencies we can try to prioritize tasks so everyone can work without being blocked by someone else.

E.G
Dependencies:
- Need data from function X to display user data
---
### Git branches

**Branch Names**
To improve our workflow Git Branches have to have a descriptive title, an association to the related ticket and the person who is working on the ticket

The branch name consists out of 3 Parts
1. Name of the person working of the assosiated ticket, we'll be using 4 letters of the firstname and 3 letters of the last name

- E.G
Arsic Stefan
1234  123
ARSI + STE = ARSISTE

2. Project acronym with the assosiated task number:

- E.G
PLA-0006

3. Short title with a descriptive name that tell about the task itself

-E.G

We are working on the function for the login
Login-Backend

At the end the Branch name should look somethink like:
ARSISTE-PLA-0006-Login-Backend

**Special Branches**
What can happen, is that somone is dependend on a function or somethink that prevents them from working without that certain think.

For example.
Someone is working on a basic CSS and HTML layout that isn't finished an not on the main branch, the other person has to make a profile page with the same layout requirements, meaning same CSS and same basic HTML layout.

Since he can't pull that from the main branch, he has to wait for the first person to finish and merge it into main, or he can make a branch from the first persons one.
That can cause multiple problems.

There are 2 ways to not get screwed with this.
1. If you are dependend on somethink like a function or code, do all the things that you are able to do and wait for the waited changes to be merge in main, while waiting work on another ticket if you can.

2. Create a new branch where the function or code is already implemented but not merge in main, try to merge all the new changes of the branch as many times as possible, as to not make a change that is not the same in the other branch


If you have to work on someone else branch while they are also working on it, create a new branch with the same name but add 'Feature' at the end.
E.G
ARSISTE-PLA-0006-Login-Backend-Feature

