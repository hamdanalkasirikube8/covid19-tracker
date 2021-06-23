# Readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Covid-19 tracker

### Track people I have met
With Corona spreading around the world you might be in the situation where you need to tell authorities which people you have met the last 14 days. Our little web(app) should help you exactly with that. It will enable the user to note which persons he/she met at which date.

The project is built with Angular 10. Bootstrap 4 and Angular components are used to create the user interface.
The application allows the user to add information about people whom they have visited. The information includes the person's name, date, time, and location of the meeting.

The user is landed on the home page after launching the application. Initially, the application has no information related to the person and meetings so the first step is to add persons by navigating to the add-user page. This can be done by opening the side navigation panel with a menu icon which is displayed on the left of the application name on the top toolbar. Secondly, the add person page can be opened with the link namely "Add Person" as shown in the sidebar.

The input fields on the Add Person page allow submitting personal information and details of meetings. The marker displayed on the Map allows choosing locations all over the Map. The location can be added by drag and drop the marker on any place in the Map or by simply clicking on any place with the mouse cursor.

To use already existing data in the application go to file "person-management.service" inside the services folder and uncomment the Person object which already has some values.

## Setup

Run `npm i` to install the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Future work

- More search filters for example by date, time.
- More feature for example, update, delete contacts.
- Automatically upload saved contacts from the directory.
- Improving and optimizing Map features.
- Improving the UI/UX.
- Unit and e2e Automation testing.
