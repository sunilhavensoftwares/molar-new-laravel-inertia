import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { Modal } from 'bootstrap';

const CalendarApp = () => {
  const calendarRef = useRef(null);
  const modalRef = useRef(null);
  const [eventData, setEventData] = useState({});

  const handleEventClick = (info) => {
    setEventData({
      title: info.event.title,
      description: info.event.extendedProps.description,
      location: info.event.extendedProps.location,
      start: info.event.start,
      end: info.event.end,
      allDay: info.event.allDay
    });

    const modalElement = document.getElementById('kt_modal_view_event');
    if (modalElement) {
      const modalInstance = new Modal(modalElement);
      modalInstance.show();
    }
  };

  return (
    <div className="container mt-5">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, bootstrap5Plugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="dayGridMonth"
        events={[
          {
            id: '1',
            title: 'Board Meeting',
            start: '2025-06-02T10:00:00',
            end: '2025-06-02T12:00:00',
            allDay: false,
            extendedProps: {
              description: 'Monthly executive board meeting.',
              location: 'Conference Room A'
            }
          },
          {
            id: '2',
            title: 'Team Outing',
            start: '2025-06-04',
            allDay: true,
            extendedProps: {
              description: 'Annual team building outing.',
              location: 'Lakeside Park'
            }
          }
        ]}
        eventClick={handleEventClick}
        ref={calendarRef}
        themeSystem="bootstrap5"
      />

      {/* Modal */}
      <div className="modal fade" id="kt_modal_view_event" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered mw-650px">
          <div className="modal-content">
            <div className="modal-header border-0 justify-content-end" bis_skin_checked="1">
                
                <div className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" id="kt_modal_view_event_edit" aria-label="Edit Event" data-bs-original-title="Edit Event" data-kt-initialized="1" bis_skin_checked="1">
                    
                    <span className="svg-icon svg-icon-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    
                </div>
                
                
                <div className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" id="kt_modal_view_event_delete" aria-label="Delete Event" data-bs-original-title="Delete Event" data-kt-initialized="1" bis_skin_checked="1">
                    
                    <span className="svg-icon svg-icon-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"></path>
                            <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"></path>
                            <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"></path>
                        </svg>
                    </span>
                    
                </div>
                
                
                <div className="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary" data-bs-toggle="tooltip" data-bs-dismiss="modal" aria-label="Hide Event" data-bs-original-title="Hide Event" data-kt-initialized="1" bis_skin_checked="1">
                    
                    <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
                        </svg>
                    </span>
                    
                </div>
                
            </div>
            <div className="modal-body pt-0 pb-20 px-lg-17">
              <div className="d-flex">
                <span className="svg-icon svg-icon-1 svg-icon-muted me-5">📅</span>
                <div className="mb-9">
                  <div className="d-flex align-items-center mb-2">
                    <span className="fs-3 fw-bold me-3">{eventData.title}</span>
                    {eventData.allDay && <span className="badge badge-light-success">All Day</span>}
                  </div>
                  <div className="fs-6">{eventData.description || '-'}</div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="svg-icon svg-icon-1 svg-icon-success me-5">🟢</span>
                <div className="fs-6">
                  <span className="fw-bold">Starts</span> {eventData.start?.toLocaleString()}
                </div>
              </div>
              <div className="d-flex align-items-center mb-9">
                <span className="svg-icon svg-icon-1 svg-icon-danger me-5">🔴</span>
                <div className="fs-6">
                  <span className="fw-bold">Ends</span> {eventData.end?.toLocaleString() || '-'}
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="svg-icon svg-icon-1 svg-icon-muted me-5">📍</span>
                <div className="fs-6">{eventData.location || '-'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
