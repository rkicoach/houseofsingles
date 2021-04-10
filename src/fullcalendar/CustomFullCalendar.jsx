import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var timesAvailable = ["9:00am", "10:00am", "11:00am", "2:00pm", "3:00pm"];
import {useDispatch} from 'react-redux'
import { register} from '../components/Redux/Actions/action';

const CustomFullCalendar = () => {

    const dispatch =useDispatch();

    const handleDateClick = (arg) => { // bind with an arrow function
        var currentDay = new Date();
        var daySelected = arg.date;

        if (daySelected >= currentDay)
          {
            var timeDiv = document.getElementById("available-times-div");

            while (timeDiv.firstChild) {
                timeDiv.removeChild(timeDiv.lastChild);
            }

            //Heading - Date Selected
            var h4 = document.createElement("h4");
            var h4node = document.createTextNode(
                days[daySelected.getDay()] + ", " +
                months[daySelected.getMonth()] + " " + 
                daySelected.getDate());
            h4.appendChild(h4node);

            timeDiv.appendChild(h4);

            for (var i = 0; i < timesAvailable.length; i++) {
                var timeSlot = document.createElement("div");
                timeSlot.classList.add("time-slot");

                var timeBtn = document.createElement("button");

                var btnNode = document.createTextNode(timesAvailable[i]); 
                timeBtn.classList.add("time-btn");

                timeBtn.appendChild(btnNode);
                timeSlot.appendChild(timeBtn);

                timeDiv.appendChild(timeSlot);

                // When time is selected
                var last = null;
                timeBtn.addEventListener("click", function() {
                    if (last != null) {
                        console.log(last);
                        last.parentNode.removeChild(last.parentNode.lastChild);
                    }
                    var confirmBtn = document.createElement("button");
                    var confirmTxt = document.createTextNode("Confirm");
                    confirmBtn.classList.add("confirm-btn");
                    confirmBtn.appendChild(confirmTxt);
                    this.parentNode.appendChild(confirmBtn);
                    event.time = this.textContent;
                    confirmBtn.addEventListener("click", function() { 
                        event.date = 
                            days[daySelected.getDay()] + ", " +
                            months[daySelected.getMonth()] + " " + 
                            daySelected.getDate();
                        sessionStorage.setItem("eventObj", JSON.stringify(event));
                        console.log(event);
                       
                     
                        dispatch(register(true))
                    });
                    last = this;
                });
            }
            var containerDiv = document.getElementsByClassName("calendar_container")[0];
            containerDiv.classList.add("time-div-active");
            document.getElementById("calendar-section").style.flex = "2";
            timeDiv.style.display = "initial";
          }  
        else
            alert("Sorry that date has already past. Please select another date.");
    }


    return (
        <FullCalendar
            defaultView="dayGridMonth"
            header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            weekends={true}
            dateClick={handleDateClick}
        />
    )
}

export default CustomFullCalendar
