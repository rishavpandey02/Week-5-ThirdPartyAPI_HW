# Work Day Scheduler - JavaScript (ThirdPartyAPI) Project - README

This project is a JavaScript-based Work Day Scheduler that allows users to schedule their work day. It includes functionality to display the current day and dynamically update the appearance of time blocks based on the current hour. Below, you'll find information on how to use the planner and details about its implementation.

## Usage

To use the planner, follow the steps below:

1. Include the provided CSS stylesheet (`style.css`) in your HTML file to ensure the proper styling of the planner.
2. Add the provided JavaScript code (`script.js`) to your project or webpage.
3. Create an HTML container with the class `container-lg` to hold the time blocks of the planner.
4. Inside the container, create individual time blocks using the provided HTML structure as an example. Each time block represents a specific hour of the work day and includes an hour label, a textarea for entering notes or tasks, and a save button.
5. Customise the time blocks according to your needs by adjusting the hour labels, textarea rows, or any other relevant elements.

When the planner is loaded, the current day will be displayed at the top. The time blocks will be color-coded to indicate past, present, and future hours based on the current time. Users can enter and save their notes or tasks in the respective time block's textarea by clicking the associated save button.

## Implementation Details

The JavaScript code provided includes the following functionality:

1. Displaying the current day at the top of the planner using the `dayjs` library.
2. Determining the current hour in 24-hour format to compare with each time block's hour.
3. Dynamically updating the appearance of each time block by adding or removing classes (`past`, `present`, and `future`) based on the current hour.
4. Loading and saving events from local storage for each time block.
5. Binding a click event to the save buttons to retrieve the associated hour and text, and then storing the event in local storage.

## Compatibility

The code uses jQuery and the `dayjs` library, so make sure to include the jQuery library (`jquery-3.4.1.min.js`) and the `dayjs` library (`dayjs.min.js`) in your HTML file. The code should work in modern web browsers.

## Customisation

Those that wish can customise the styling and layout of the planner by modifying the CSS code (`style.css`) and adjusting the HTML code to change the structure to fit their requirements.

## Credits

The JavaScript code was written by Rishav Pandey.
