# Web Development Project 7 - _Crewmate Management App_

Submitted by: **Nereida Rondon**

This web app: **Allows users to create, edit, view, and delete team members (referred to as "crewmates") with specific attributes. Users can name the crewmate, assign a role, and select a theme color for each crewmate. The app features a summary page displaying all crewmates in a responsive grid with color-coded borders based on the theme selected. Each crewmate in the list has a direct, unique link to their individual detail page, which can be shared.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes a form that allows users to add new crewmates with specified attributes.**
- [x] **Clicking on a crewmate's name in the list view displays more details about them.**
- [x] **Each detail view of a crewmate has a direct, unique link to that crewmate’s detail view page.**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/src/assets/week7.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with LiceCap

## Notes

Some challenges encountered during development:

- **Routing and Navigation:** Structuring the app to enable viewing, editing, and deleting specific crewmates required setting up dynamic routes. Ensuring smooth navigation between the list view, detail view, and edit view involved managing multiple route configurations and maintaining the navigation bar's persistence across views.

- **Data Sharing Across Routes:** Displaying and editing the correct crewmate data in the detailed and edit views required sharing data across components. To avoid redundant API calls, a context provider was implemented to manage crewmate data globally, which simplified data management but required adjustments in data fetching and handling across components.

- **Responsive Layout Design:** Implementing a responsive, three-column grid layout for the crewmate list required careful use of CSS Grid and Flexbox. Ensuring each crewmate's profile displayed a border color matching their selected theme added additional complexity to the styling and layout.

## License

    Copyright 2024 Nereida Rondon

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
