import React from "react";
import { events } from "../logo/EventsData";
import EventCard from "./EventCard";
import "./Events.css";

function Events() {
<<<<<<< Updated upstream
=======
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Fetch events from Firebase and seed initial data if empty
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsQuery = query(collection(db, "events"), orderBy("endDate", "desc"));
        const querySnapshot = await getDocs(eventsQuery);
        const events = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // If no events exist, seed with initial data
        if (events.length === 0) {
          const seededEvents = await Promise.all(
            initialEvents.map(async (event) => {
              // Check if event with same name already exists
              const existingEvent = events.find(e => e.name === event.name);
              if (!existingEvent) {
                const newEvent = {
                  ...event,
                  endDate: new Date(2024, 11, 1).toISOString(), // Default to Dec 1, 2024
                  createdAt: new Date().toISOString()
                };
                const docRef = await addDoc(collection(db, "events"), newEvent);
                return { id: docRef.id, ...newEvent };
              }
              return null;
            })
          );
          const validSeededEvents = seededEvents.filter(event => event !== null);
          if (validSeededEvents.length > 0) {
            setEventsList(validSeededEvents);
            message.success('Initial events added successfully!');
          }
        } else {
          setEventsList(events);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        message.error('Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = dayjs();
    return eventsList.reduce((acc, event) => {
      if (dayjs(event.endDate).isAfter(now)) {
        acc.upcomingEvents.push(event);
      } else {
        acc.pastEvents.push(event);
      }
      return acc;
    }, { upcomingEvents: [], pastEvents: [] });
  }, [eventsList]);

  const showPasswordModal = () => {
    setIsPasswordModalVisible(true);
  };

  const handlePasswordSubmit = (values) => {
    if (values.password === 'gdsc123') {
      setIsPasswordModalVisible(false);
      setIsAdmin(true);
      message.success('Admin access granted');
    } else {
      message.error('Incorrect password');
    }
  };

  const handleAddEventClick = () => {
    if (isAdmin) {
      setIsModalVisible(true);
    } else {
      showPasswordModal();
    }
  };

  const handleAddEvent = async (values) => {
    try {
      setLoading(true);
      const newEvent = {
        name: values.name,
        info: values.description,
        link: values.link,
        endDate: values.endDate.toISOString(),
        createdAt: new Date().toISOString(),
      };

      const docRef = await addDoc(collection(db, "events"), newEvent);
      setEventsList([{ id: docRef.id, ...newEvent }, ...eventsList]);
      setIsModalVisible(false);
      form.resetFields();
      message.success('Event added successfully!');
    } catch (error) {
      console.error("Error adding event:", error);
      message.error('Failed to add event');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "events", eventId));
      setEventsList(eventsList.filter(event => event.id !== eventId));
      message.success('Event deleted successfully!');
    } catch (error) {
      console.error("Error deleting event:", error);
      message.error('Failed to delete event');
    } finally {
      setLoading(false);
    }
  };

  const renderEventCard = (event, isPast) => (
    <Card
      key={event.id}
      hoverable
      className={`eventCard ${isPast ? 'past-event' : ''}`}
      onClick={() => {
        if (event.name === "Hawkthon") {
          navigate('/events/hawkthon');
        } else if (event.link) {
          window.open(event.link, '_blank');
        }
      }}
      extra={
        isAdmin && (
          <Popconfirm
            title="Delete Event"
            description="Are you sure you want to delete this event?"
            onConfirm={(e) => {
              e.stopPropagation();
              handleDeleteEvent(event.id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              type="text" 
              danger 
              icon={<DeleteOutlined />}
              className="delete-button"
              onClick={(e) => e.stopPropagation()}
            />
          </Popconfirm>
        )
      }
    >
      <Card.Meta
        title={event.name}
        description={
          <div className="event-content">
            <Text className="eventDescription">{event.info}</Text>
            {!isPast && (
              <Text className="event-date">
                Ends on: {dayjs(event.endDate).format('MMM D, YYYY')}
              </Text>
            )}
            {!isPast && event.name !== "Hawkthon" && (
              <Button 
                type="primary" 
                href={event.link} 
                target="_blank"
                className="viewEventButton"
                onClick={(e) => e.stopPropagation()}
              >
                View Event
              </Button>
            )}
            {!isPast && event.name === "Hawkthon" && (
              <Button 
                type="primary" 
                className="viewEventButton"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/events/hawkthon');
                }}
              >
                View Hawkthon
              </Button>
            )}
          </div>
        }
      />
    </Card>
  );

  const renderEventGrid = (events, title, isPast = false) => (
    <div className={`event-section ${isPast ? 'past-events' : 'upcoming-events'}`}>
      <Title level={2} className={`section-title ${isPast ? 'past-title' : 'upcoming-title'}`}>
        {title}
      </Title>
      <div className="eventGrid">
        {events.map((event) => renderEventCard(event, isPast))}
        {events.length === 0 && (
          <div className="no-events">
            <Text>No {title.toLowerCase()} at the moment</Text>
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

>>>>>>> Stashed changes
  return (
    <div className="eventsPage">
      <h1>Events</h1>
      <div className="eventCardHolder">
        {events.map((event) => (
          <EventCard name={event.name} info={event.info} link={event.link} />
        ))}
      </div>
    </div>
  );
}

export default Events;
